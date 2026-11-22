import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";
import {createHash, createDecipheriv, privateDecrypt, constants} from "node:crypto";
import {gunzipSync} from "node:zlib";

const repo = "Luo-Zhengding/Spatial-Audio-Listening";
const here = path.dirname(fileURLToPath(import.meta.url));
const packFile = [path.join(here,"../questions.js"),path.join(here,"../docs/audition_export/questions.js")].find(fs.existsSync);
const pack = JSON.parse(fs.readFileSync(packFile,"utf8").trim().replace(/^window\.LISTENING_STUDY\s*=\s*/,"").replace(/;$/,""));
const [keyPath, output, localFile] = process.argv.slice(2);
if (!keyPath || !output) throw Error("Usage: node read_responses.mjs organizer.pem output-directory [encrypted-file.txt]");
const privateKey = fs.readFileSync(keyPath);
fs.mkdirSync(output,{recursive:true});

function unpack(text) {
  const [version,wkey,nonce,ciphertext] = text.split(".");
  if (version !== "AWS1") throw Error("Unknown archive format");
  const key = privateDecrypt({key:privateKey,oaepHash:"sha256",padding:constants.RSA_PKCS1_OAEP_PADDING},Buffer.from(wkey,"base64url"));
  const cipher = Buffer.from(ciphertext,"base64url");
  const dec = createDecipheriv("aes-256-gcm",key,Buffer.from(nonce,"base64url"));
  dec.setAuthTag(cipher.subarray(-16));
  const compressed = Buffer.concat([dec.update(cipher.subarray(0,-16)),dec.final()]);
  const data = JSON.parse(gunzipSync(compressed,{maxOutputLength:16*1024*1024}));
  const half = pack.questions.length;
  const legacy = /^L\d{2,4}$/.test(data.code) && data.list === (Number(data.code.slice(1))%2 ? "A":"B");
  const named = /^P[0-9a-f]{32}$/.test(data.code) && typeof data.name === "string" &&
    data.name.trim().length > 0 && data.name.length <= 120 && ["A","B"].includes(data.list);
  if (data.study !== pack.study || data.release !== pack.release || !(legacy || named) ||
      data.trials.length !== 2*half) throw Error("Study identity or trial count mismatch");
  const start = Date.parse(data.start);
  const at = offset => new Date(start+offset).toISOString();
  const seen = new Set();
  const rows = data.trials.map(([index,side,answer,plays,ended,shown,updated,parts,whole],i) => {
    if (!Number.isInteger(index) || ![0,1].includes(side) || !(plays>0) || seen.has(index+"/"+side) ||
        (i>=half && index!==data.trials[i-half][0])) throw Error("Invalid paired trial");
    seen.add(index+"/"+side);
    const q=pack.questions[index], clip=q.clips[side];
    if (parts && (!Array.isArray(parts) || parts.length !== q.segments?.length ||
        !parts.every(([starts,end]) => Number.isInteger(starts) && starts >= 0 && [0,1].includes(end)))) throw Error("Invalid recording playback");
    return {study:pack.study,release_sha256:pack.release,participant:data.code,...(named ? {participant_name:data.name} : {}),list:data.list,
      block:i<half?1:2,position:i+1,qa_id:q.id,view:clip.view,audio_sha256:clip.sha256,
      prompt_sha256:q.promptSha256,subtype_id:q.subtype,answer_format:q.format,answer,
      raw_response:Array.isArray(answer)?answer.join(", "):answer,playback_starts:plays,reached_end:Boolean(ended),
      ...(parts ? {segment_playback:parts.map(([starts,end]) => ({starts,ended:Boolean(end)})),prior_full_clip_playback:Boolean(whole)} : {}),
      session_started_utc:data.start,first_shown_utc:at(shown),answer_updated_utc:at(updated),finished_utc:data.end};
  });
  return {code:data.code,rows};
}

function save(text, expected) {
  text=text.trim();
  const digest=createHash("sha256").update(text).digest("hex");
  if (expected && expected!==digest) throw Error("Archive hash mismatch");
  const {code,rows}=unpack(text);
  const jsonl=rows.map(row=>JSON.stringify(row)).join("\n")+"\n";
  let target=path.join(output,code+".jsonl");
  if (fs.existsSync(target) && fs.readFileSync(target,"utf8")!==jsonl) target=path.join(output,code+"-"+digest+".jsonl");
  if (!fs.existsSync(target)) fs.writeFileSync(target,jsonl,{flag:"wx"});
  console.log(code, rows.length, target);
}

if (localFile) {
  save(fs.readFileSync(localFile,"ascii"));
} else {
  let failed=0, collected=0;
  const seen = new Set();
  for (let page=1; ; page++) {
    const roster=await fetch("https://api.github.com/repos/"+repo+"/issues?state=all&per_page=100&page="+page,
      {headers:{"User-Agent":"AudioWorldSim-organizer"}});
    if (!roster.ok) throw Error("Cannot list submissions: HTTP "+roster.status);
    const issues=await roster.json();
    for (const issue of issues) {
      const match=/^Listening response ([0-9a-f]{64})$/.exec(issue.title);
      if (!match || issue.pull_request || seen.has(match[1]) || issue.labels.some(label=>label.name==="study-rehearsal")) continue;
      try {
        let text=(issue.body || "").trim();
        if (!text.startsWith("AWS1.")) {
          const link=/^\[[^\]\r\n]+\]\((https:\/\/github\.com\/user-attachments\/files\/\d+\/[\w.-]+\.txt)\)$/.exec(text);
          if (!link) throw Error("Missing encrypted answer");
          const result=await fetch(link[1],{signal:AbortSignal.timeout(20000)});
          if (!result.ok) throw Error("Attachment unavailable: "+result.status);
          text=await result.text();
        }
        save(text,match[1]);seen.add(match[1]);collected++;
      } catch (error) { failed++; console.error("Unable to read issue",issue.number,error.message); }
    }
    if (issues.length<100) break;
  }
  console.log(collected,"distinct participant submissions collected.");
  if (failed) process.exitCode=1;
}
