(() => {
  "use strict";
  const repo = "Luo-Zhengding/Spatial-Audio-Listening";
  const encoder = new TextEncoder();
  function base64url(bytes) {
    const parts = [];
    for (let i = 0; i < bytes.length; i += 8192) parts.push(String.fromCharCode(...bytes.subarray(i, i + 8192)));
    return btoa(parts.join("")).replaceAll("+","-").replaceAll("/","_").replace(/=+$/,"");
  }
  async function seal(rows, study) {
    const first = rows[0], start = Date.parse(first.session_started_utc);
    const indices = new Map(study.questions.map((q,i) => [q.id,i]));
    const packed = {
      study:study.study, release:study.release, code:first.participant, name:first.participant_name, list:first.list,
      trialReleases:rows.map(r => [...study.priorReleases, study.release].indexOf(r.release_sha256)),
      start:first.session_started_utc, end:first.finished_utc,
      trials:rows.map(r => [indices.get(r.qa_id), r.view === "direct_binaural" ? 0 : 1,
        r.answer, r.playback_starts, Number(r.reached_end), Date.parse(r.first_shown_utc)-start,
        Date.parse(r.answer_updated_utc)-start,
        ...(r.segment_playback ? [r.segment_playback.map(p => [p.starts,Number(p.ended)]),Number(r.prior_full_clip_playback)] : [])])
    };
    const compressed = new Blob([JSON.stringify(packed)]).stream().pipeThrough(new CompressionStream("gzip"));
    const bytes = await new Response(compressed).arrayBuffer();
    const pub = await crypto.subtle.importKey("jwk",window.STUDY_PUBLIC_KEY,
      {name:"RSA-OAEP",hash:"SHA-256"},false,["wrapKey"]);
    const aes = await crypto.subtle.generateKey({name:"AES-GCM",length:256},true,["encrypt"]);
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encrypted = await crypto.subtle.encrypt({name:"AES-GCM",iv},aes,bytes);
    const wrapped = await crypto.subtle.wrapKey("raw",aes,pub,"RSA-OAEP");
    return ["AWS1",base64url(new Uint8Array(wrapped)),base64url(iv),base64url(new Uint8Array(encrypted))].join(".");
  }
  async function prepare(envelope) {
    const hash = new Uint8Array(await crypto.subtle.digest("SHA-256",encoder.encode(envelope)));
    const id = Array.from(hash,b => b.toString(16).padStart(2,"0")).join("");
    const url = new URL("https://github.com/" + repo + "/issues/new");
    url.searchParams.set("title","Listening response " + id);
    const large = envelope.length > 5000;
    if (!large) url.searchParams.set("body",envelope);
    return {id, url:url.href, large, attachment:envelope.length > 58000};
  }
  async function received(id, envelope, started) {
    const title = "Listening response " + id;
    const url = new URL("https://api.github.com/repos/" + repo + "/issues");
    url.search = new URLSearchParams({state:"all",per_page:"100",since:new Date(Date.parse(started)-86400000).toISOString()});
    for (let page=1; ; page++) {
      url.searchParams.set("page",String(page));
      const result = await fetch(url,{cache:"no-store",credentials:"omit",signal:AbortSignal.timeout(10000)});
      if (!result.ok) throw Error("GitHub receipt unavailable");
      const issues = await result.json();
      for (const issue of issues) {
        if (issue.pull_request || issue.title!==title) continue;
        const body=(issue.body || "").trim();
        if (body===envelope) return true;
        if (new RegExp("^\\[[^\\]]+\\]\\(https://github\\.com/user-attachments/files/\\d+/"+id+"\\.txt\\)$").test(body)) return "attachment";
      }
      if (issues.length<100) return false;
    }
  }
  window.listeningSubmission = {seal,prepare,received};
})();
