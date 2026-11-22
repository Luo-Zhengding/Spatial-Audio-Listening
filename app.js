(() => {
  "use strict";
  const byId = id => document.getElementById(id);
  const study = window.LISTENING_STUDY;
  const warning = byId("warning");
  function warn(message) { warning.textContent = message; warning.hidden = !message; }
  if (!study || !Array.isArray(study.questions) || !study.questions.length) {
    warn("The question pack could not be loaded. Reopen the complete study folder.");
    byId("start-form").querySelector("button").disabled = true;
    return;
  }
  const catalog = new Map(study.questions.map(q => [q.id, q]));
  const half = catalog.size;
  const count = half * 2;
  const now = () => new Date().toISOString();
  const players = byId("players");
  const answerBox = byId("answer");
  const memory = new Map();
  let submission, checking = false;
  let state, order, toneContext, tone, storedValue;
  let volume = 1, muted = false;
  const memoryKey = session => study.study + ":" + (session.name ? "name:" + session.name.toLowerCase() : session.code);
  const qAt = () => catalog.get(order[state.index].id);

  function shuffle(items, seed) {
    let n = 2166136261;
    for (const ch of seed) n = Math.imul(n ^ ch.charCodeAt(0), 16777619) >>> 0;
    const a = items.slice();
    for (let i = a.length - 1; i > 0; i--) {
      n = (Math.imul(n, 1664525) + 1013904223) >>> 0;
      const j = Math.floor(n / 4294967296 * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function schedule(code, list) {
    const questions = shuffle(study.questions, study.study + code);
    return [true, false].flatMap(firstRound => questions.map(q => {
      const directFirst = (list === "A") === q.directForA;
      const clip = q.clips[firstRound === directFirst ? 0 : 1];
      return {id:q.id, clip, key:q.id + "/" + clip.view};
    }));
  }
  function save() {
    const key = memoryKey(state);
    const data = JSON.stringify(state);
    memory.set(key, data);
    try {
      localStorage.setItem(key, data);
      storedValue = data;
      byId("save-note").textContent = "Progress saved on this device.";
    } catch {
      byId("save-note").textContent = "Browser storage unavailable. Keep this tab open.";
      warn("This browser cannot save progress across visits. Keep this tab open and download your answers before closing it.");
    }
  }
  // A completed session must never be overwritten by a stale tab.
  window.addEventListener("storage", event => {
    if (!state || event.key !== memoryKey(state) || event.newValue === storedValue) return;
    memory.delete(event.key);
    state = null;
    show("welcome");
    warn("This session changed in another tab. Continue there or enter your name again.");
  });
  function show(id) {
    for (const section of ["welcome", "test", "pause", "done"]) byId(section).hidden = section !== id;
    if (id !== "test") clearPlayers();
    window.scrollTo(0, 0);
  }
  function newSession(name) {
    const bytes = crypto.getRandomValues(new Uint8Array(16));
    const code = "P" + Array.from(bytes,b => b.toString(16).padStart(2,"0")).join("");
    const assigned = new URLSearchParams(location.search).get("list");
    const list = ["A","B"].includes(assigned) ? assigned : (bytes[0] % 2 ? "A" : "B");
    return {name, code, list,
      started: now(), index: 0, breakPending: false, finished: null, trials: {}};
  }
  function trial() { return state.trials[order[state.index].key]; }
  function hasPlayback(t) {
    return t?.plays > 0 && (!t.parts || t.playedWhole || t.parts.every(p => p.starts > 0));
  }
  function hasAnswer(t) {
    if (!t) return false;
    return Array.isArray(t.answer) ? t.answer.length > 0 : typeof t.answer === "string" && t.answer.trim().length > 0;
  }
  function progress() {
    const n = Object.values(state.trials).filter(t => hasPlayback(t) && hasAnswer(t)).length;
    byId("progress-text").textContent = n + " of " + count + " answered";
    byId("progress").max = count;
    byId("progress").value = n;
  }
  function paragraphs(container, text) {
    container.replaceChildren();
    for (const block of text.trim().split(/\n\s*\n/)) {
      const p = document.createElement("p"); p.textContent = block; container.append(p);
    }
  }
  function clearValidation() { byId("validation").hidden = true; }
  function invalid(message) {
    const el = byId("validation"); el.textContent = message; el.hidden = false;
  }
  function setAnswer(value) {
    trial().answer = value; trial().answerRelease = study.release; trial().updated = now();
    clearValidation(); save(); progress();
  }
  function renderAnswer(q, t) {
    answerBox.replaceChildren();
    if (q.format === "open") {
      const input = document.createElement("textarea");
      input.setAttribute("aria-label", "Your written answer in English");
      input.placeholder = "Write your answer here…"; input.value = t.answer || "";
      input.addEventListener("input", () => setAnswer(input.value));
      answerBox.append(input);
      return;
    }
    const multi = q.format === "multiple_select";
    const options = q.format === "judgment" ? ["Yes", "No"].map(text => ({letter:text,text})) : q.options;
    for (const option of options) {
      const label = document.createElement("label"); label.className = "option";
      const input = document.createElement("input");
      input.type = multi ? "checkbox" : "radio"; input.name = "choice"; input.value = option.letter;
      input.checked = multi ? (t.answer || []).includes(option.letter) : t.answer === option.letter;
      const description = document.createElement("span");
      if (q.format !== "judgment") {
        const letter = document.createElement("strong"); letter.textContent = option.letter + ".";
        description.append(letter, " ");
      }
      description.append(option.text);
      label.append(input, description); answerBox.append(label);
      input.addEventListener("change", () => setAnswer(multi
        ? Array.from(answerBox.querySelectorAll("input:checked"), x => x.value) : input.value));
    }
  }
  function clearPlayers() {
    const previous = players.querySelectorAll("audio");
    players.replaceChildren();
    for (const audio of previous) {
      audio.pause(); audio.removeAttribute("src"); audio.load();
    }
  }
  function renderPlayers(q, clip, t) {
    clearPlayers();
    byId("media-error").hidden = true;
    byId("recordings-title").textContent = q.segments ? "Recordings" : "Recording";
    if (q.segments && !t.parts) {
      t.playedWhole = t.plays > 0;
      t.parts = q.segments.map(() => ({starts:0, ended:false}));
    }
    const spans = q.segments || [{label:"Question recording"}];
    spans.forEach((span, i) => {
      const audio = document.createElement("audio");
      audio.controls = true; audio.preload = "metadata";
      audio.volume = volume; audio.muted = muted;
      audio.setAttribute("aria-label",span.label);
      if (q.segments) {
        const label = document.createElement("strong");
        label.className = "recording-label"; label.textContent = span.label;
        players.append(label);
      }
      players.append(audio);
      audio.addEventListener("play", () => {
        if (audio.paused || !players.contains(audio)) return;
        for (const other of players.querySelectorAll("audio")) if (other !== audio) other.pause();
      });
      audio.addEventListener("volumechange", () => {
        if (!players.contains(audio)) return;
        volume = audio.volume; muted = audio.muted;
        for (const other of players.querySelectorAll("audio")) {
          if (other.volume !== volume) other.volume = volume;
          if (other.muted !== muted) other.muted = muted;
        }
      });
      audio.addEventListener("playing", () => {
        if (!players.contains(audio) || audio.paused) return;
        t.plays++;
        if (t.parts) t.parts[i].starts++;
        clearValidation(); save(); progress();
      });
      audio.addEventListener("ended", () => {
        if (!players.contains(audio)) return;
        if (t.parts) t.parts[i].ended = true;
        t.ended ||= !t.parts || t.parts.every(p => p.ended);
        save();
      });
      audio.addEventListener("error", () => {
        if (!players.contains(audio)) return;
        byId("media-error").textContent = span.label + " is unavailable. Reload this question or contact the organizer.";
        byId("media-error").hidden = false;
      });
      audio.src = q.segments ? clip.file.replace(/\.wav$/, "-" + (i + 1) + ".wav") : clip.file;
    });
  }
  function renderQuestion() {
    if (state.finished) { renderDone(); return; }
    if (state.breakPending) { show("pause"); byId("pause-title").focus(); return; }
    const q = qAt(), {clip, key} = order[state.index];
    if (!state.trials[key]) state.trials[key] = {answer:null, plays:0, ended:false, firstShown:now(), updated:null};
    show("test"); clearValidation();
    byId("session-label").textContent = (state.name || state.code) + "  ·  Block " + (state.index < half ? "1" : "2") + " of 2";
    byId("question-title").textContent = "Question " + (state.index + 1);
    byId("question-title").focus();
    paragraphs(byId("setup-text"), q.setup);
    paragraphs(byId("prompt"), q.question);
    byId("instruction").textContent = q.format === "open" ? q.instruction :
      q.format === "multiple_select" ? "Select all that apply." : "Select one answer.";
    renderPlayers(q, clip, trial());
    byId("back").disabled = state.index === 0 || state.index === half;
    byId("next").textContent = state.index === count - 1 ? "Finish test" :
      state.index === half - 1 ? "Finish block 1" : "Next question →";
    renderAnswer(q, trial()); save(); progress();
  }
  function renderDone() {
    show("done"); byId("receipt").textContent = (state.name || state.code) + " · " + count + " answers recorded.";
    byId("done-title").focus();
    prepareSubmission();
  }
  byId("start-form").addEventListener("submit", e => {
    e.preventDefault();
    const input = byId("listener");
    const name = input.value.normalize("NFC").trim().replace(/\s+/gu," ");
    const legacy = /^L\d{2,4}$/i.test(name);
    const code = legacy ? "L" + String(Number(name.slice(1))).padStart(2,"0") : null;
    const key = memoryKey(legacy ? {code} : {name});
    let raw = memory.get(key);
    try { raw = localStorage.getItem(key) || raw; } catch { /* save() reports unavailable storage. */ }
    if (!(legacy && raw) && (!/\p{Script=Latin}/u.test(name) ||
        !/^[\p{Script=Latin}\p{Mark} .'’ʼ‐‑-]+$/u.test(name))) {
      warn("Enter your name in English, for example Alex Chen."); input.focus(); return;
    }
    warn("");
    try {
      const next = raw ? JSON.parse(raw) : newSession(name);
      if (memoryKey(next) !== key || !["A","B"].includes(next.list) || !next.trials ||
          !Number.isInteger(next.index) || next.index < 0 || next.index >= count) throw Error();
      input.value = next.name || next.code;
      state = next; storedValue = raw;
    } catch { warn("The saved session cannot be read. Contact the organizer before continuing."); return; }
    if (tone) { try { tone.stop(); } catch {} }
    order = schedule(state.code, state.list); renderQuestion();
  });
  byId("next").addEventListener("click", () => {
    if (!hasPlayback(trial())) {
      invalid(trial().parts ? "Play each recording before continuing." : "Play the recording before continuing."); return;
    }
    if (!hasAnswer(trial())) { invalid("Enter an answer before continuing."); return; }
    if (state.index === count - 1) {
      const missing = order.findIndex(({key}) => !hasPlayback(state.trials[key]) || !hasAnswer(state.trials[key]));
      if (missing >= 0) { state.index = missing; renderQuestion(); return; }
      state.finished = now(); save(); renderDone(); return;
    }
    state.index++;
    if (state.index === half && !state.breakTaken) state.breakPending = true;
    save(); renderQuestion();
  });
  byId("back").addEventListener("click", () => {
    if (state.index > 0 && state.index !== half) { state.index--; renderQuestion(); }
  });
  byId("resume-block").addEventListener("click", () => {
    state.breakPending = false; state.breakTaken = true; save(); renderQuestion();
  });
  function home() {
    if (state) save();
    show("welcome"); state = null; byId("listener").focus();
  }
  for (const id of ["return","leave","pause-home"]) byId(id).addEventListener("click", home);
  function responseRows() {
    return order.flatMap(({id, key, clip}, i) => {
      const t = state.trials[key]; if (!hasAnswer(t)) return [];
      const q = catalog.get(id);
      const release = t.answerRelease || study.previousRelease;
      const promptHash = release === study.previousRelease && q.previousPromptSha256 || q.promptSha256;
      return [{study:study.study, release_sha256:release, participant:state.code,
        ...(state.name ? {participant_name:state.name} : {}), list:state.list,
        block:i < half ? 1 : 2, position:i+1, qa_id:id, view:clip.view, audio_sha256:clip.sha256,
        prompt_sha256:promptHash, subtype_id:q.subtype, answer_format:q.format, answer:t.answer,
        raw_response:Array.isArray(t.answer) ? t.answer.join(", ") : t.answer,
        playback_starts:t.plays, reached_end:t.ended,
        ...(t.parts ? {segment_playback:t.parts, prior_full_clip_playback:t.playedWhole} : {}),
        session_started_utc:state.started,
        first_shown_utc:t.firstShown, answer_updated_utc:t.updated, finished_utc:state.finished}];
    });
  }
  async function prepareSubmission() {
    const session = state, status = byId("submission-status");
    submission = null;
    for (const id of ["github-submit","submission-body","attachment","check-receipt","github-copy"]) byId(id).hidden = true;
    status.textContent = "Preparing your encrypted response.";
    try {
      const envelope = session.envelope || await window.listeningSubmission.seal(responseRows(),study);
      const ready = await window.listeningSubmission.prepare(envelope);
      if (state !== session) return;
      session.envelope = envelope; save(); submission = ready;
      if (session.receipt === ready.id) {
        status.textContent = session.attachmentReceipt ? "GitHub has received your attachment. The organizer will verify its contents." :
          "GitHub has received your encrypted response. You may close this page."; return;
      }
      const link = byId("github-submit"); link.href = ready.url; link.hidden = false;
      byId("check-receipt").hidden = false;
      if (ready.attachment) {
        byId("attachment").hidden = false;
        status.textContent = "Download the encrypted text file, open GitHub, attach it to the issue and select Create. Keep the prefilled title.";
      } else if (ready.large) {
        byId("github-copy").hidden = false;
        byId("submission-body").value = envelope; byId("submission-body").hidden = false;
        status.textContent = "Copy the encrypted response, open GitHub, paste it into the issue body and select Create. Keep the prefilled title.";
      } else {
        status.textContent = "Open GitHub, sign in if asked, then select Create to send the prefilled issue. Your GitHub username is public. Only the organizer can read your answers.";
      }
      if (session.openedGitHub) checkReceipt();
    } catch {
      if (state !== session) return;
      status.textContent = "This browser could not prepare the encrypted submission. Keep your JSONL backup private and contact the organizer.";
    }
  }
  async function checkReceipt() {
    const session = state, ready = submission;
    if (checking || !session?.finished || !ready || session.receipt === ready.id) return;
    checking = true;
    try {
      const arrived = await window.listeningSubmission.received(ready.id,session.envelope,session.started);
      if (state !== session) return;
      if (arrived) { session.receipt = ready.id; session.attachmentReceipt = arrived === "attachment"; save(); prepareSubmission(); }
      else byId("submission-status").textContent = "Receipt pending. After creating the GitHub issue, allow a minute, then check again.";
    } catch {
      if (state === session) byId("submission-status").textContent = "Receipt unavailable. You can check again after reconnecting.";
    } finally { checking = false; }
  }
  byId("github-submit").addEventListener("click", () => {state.openedGitHub = true; save();});
  byId("check-receipt").addEventListener("click", checkReceipt);
  window.addEventListener("focus", () => {if (state?.openedGitHub) checkReceipt();});
  byId("github-copy").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(state.envelope); byId("github-copy").textContent = "Copied"; }
    catch { byId("submission-body").focus(); byId("submission-body").select(); }
  });
  byId("attachment").addEventListener("click", () => saveFile(state.envelope,submission.id+".txt","text/plain"));
  function saveFile(text, filename, type) {
    const href = URL.createObjectURL(new Blob([text],{type})), a = document.createElement("a");
    a.href = href; a.download = filename;
    document.body.append(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(href),30000);
  }
  function download() {
    saveFile(responseRows().map(r=>JSON.stringify(r)).join("\n")+"\n",
      study.study+"_"+state.code+(state.finished ? "" : "_partial")+".jsonl","application/x-ndjson");
  }
  byId("download").addEventListener("click", download);
  byId("partial").addEventListener("click", download);
  byId("help").addEventListener("click", () => byId("instructions").showModal());
  for (const button of document.querySelectorAll("[data-ear]")) {
    button.addEventListener("click", async () => {
      const side = button.dataset.ear;
      try {
        toneContext ||= new AudioContext(); await toneContext.resume();
        if (tone) { try { tone.stop(); } catch {} }
        const frames = Math.round(toneContext.sampleRate * .65);
        const buf = toneContext.createBuffer(2, frames, toneContext.sampleRate);
        const channel = buf.getChannelData(side === "left" ? 0 : 1);
        for (let i=0;i<frames;i++) channel[i] = .14*Math.sin(2*Math.PI*440*i/toneContext.sampleRate)*Math.min(1,i/1200,(frames-i-1)/1200);
        tone=toneContext.createBufferSource(); tone.buffer=buf; tone.connect(toneContext.destination); tone.start();
        byId("tone-status").textContent = "Tone played on the "+side+" channel.";
      } catch { byId("tone-status").textContent = "Tone unavailable. Check your browser's audio output."; }
    });
  }
})();
