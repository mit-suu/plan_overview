// Spike P0 bước 8 — đo token I-4 (trích field theo section) và 1 CR (C-2 + C-4). Chạy từ flintflow_be:
//   npx tsx <scratch>/spike/measure.mts [--real]
// Prompt ở đây là prompt NHÁP (skill thật viết ở P2) — số đo dùng để ước lượng bậc độ lớn chi phí.
import { createRequire } from "node:module"
import fs from "node:fs"
const require = createRequire(import.meta.url)
const L = require("./lib.cjs")
const REAL = process.argv.includes("--real")
const schema = JSON.parse(fs.readFileSync("assets/schema/srs-spine.schema.json", "utf8")).properties
const est = (s: string) => Math.ceil(s.length / 4)

const KEYMAP: [RegExp, string[]][] = [
  [/overview|introduction|scope|purpose/i, ["project"]],
  [/actor/i, ["actors"]],
  [/use ?case/i, ["use_cases"]],
  [/screen|ui|interface/i, ["screens"]],
  [/function|feature|3\.\d/i, ["features", "functions"]],
  [/performance|reliab|security|non-functional|nfr|4\./i, ["nfrs"]],
  [/business rule|br-/i, ["business_rules"]],
  [/glossary|term/i, ["glossary"]],
  [/message/i, ["messages"]],
  [/entit|data/i, ["entities"]],
]
const keysFor = (h: string) => KEYMAP.find(([re]) => re.test(h))?.[1] ?? ["other_requirements"]

const EXTRACT_INSTR = `You are FlintFlow's import extractor. Extract structured SRS Spine fields from ONE section of an existing SRS.
Rules: extract only what the text states; never invent; every field must cite source_block_ids; confidence in [0,1]; keep original wording.
Return JSON only: {"section_id": string, "fields": [{"path": string, "value": any, "confidence": number, "source_block_ids": string[]}]}.
Target Spine schema (JSON Schema excerpt for this section):\n`

type Sec = { heading: string; blocks: { id: string; text: string }[] }
async function sections(file: string, numbered: boolean): Promise<Sec[]> {
  const bs = await L.blocks(await L.open(file))
  const out: Sec[] = []; let cur: Sec | null = null; let k = 0
  for (const b of bs) {
    const id = "B" + String(++k).padStart(4, "0")
    if (!b.text.trim()) continue
    const isHead = numbered ? /^\d+(\.\d+){0,1}\s/.test(b.text) : b.kind === "heading" && b.level >= 1 && b.level <= 3
    if (isHead) { cur = { heading: b.text, blocks: [] }; out.push(cur); continue }
    if (!cur) { cur = { heading: "(front matter)", blocks: [] }; out.push(cur) }
    cur.blocks.push({ id, text: b.kind === "table_cell_p" ? `| ${b.text}` : b.text })
  }
  return out.filter((s) => s.blocks.length)
}
const extractPrompt = (s: Sec) => EXTRACT_INSTR + JSON.stringify(Object.fromEntries(keysFor(s.heading).map((k) => [k, schema[k]]))) +
  `\n\nSection heading: ${s.heading}\nBlocks:\n` + s.blocks.map((b) => `[${b.id}] ${b.text}`).join("\n")

async function call(prompt: string, maxTokens = 4096) {
  const { callLLM } = await import("file:///D:/ky_9/VUA/FlintFlow/flintflow_be/src/shared/ai/providers/llm.router.ts")
  const t0 = Date.now()
  const r = await callLLM(prompt, { provider: "glm", model: "zai-org/GLM-5.3-Flash", maxTokens, temperature: 0.2 })
  let parsed = false; try { JSON.parse(r.text.replace(/^```(json)?|```$/gm, "").trim()); parsed = true } catch {}
  return { tokens_in: r.promptTokens, tokens_out: r.completionTokens, est_in: est(prompt), ms: Date.now() - t0, json_ok: parsed, sample: r.text.slice(0, 300) }
}

const rows: any[] = []
for (const [file, numbered, label] of [["in/sample-draft.docx", false, "sample-draft (FPT, EN)"], ["in/real-3.2.docx", true, "real 3.2–3.4 (UC list)"]] as const) {
  const secs = await sections(new URL(file, import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1"), numbered)
  let tin = 0
  for (const s of secs) { const p = extractPrompt(s); tin += est(p); rows.push({ doc: label, section: s.heading.slice(0, 40), blocks: s.blocks.length, text_chars: s.blocks.reduce((a, b) => a + b.text.length, 0), est_in: est(p) }) }
  console.log(`${label}: ${secs.length} sections, est tokens_in total = ${tin}`)
}
console.table(rows)

if (REAL) {
  const draft = await sections(new URL("in/sample-draft.docx", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1"), false)
  const real = await sections(new URL("in/real-3.2.docx", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1"), true)
  const pick = (ss: Sec[], re: RegExp) => ss.find((s) => re.test(s.heading))!
  const res: any = {}
  for (const [name, s] of [["I-4 actors", pick(draft, /actor/i)], ["I-4 use cases", pick(draft, /use case/i)], ["I-4 real 3.2 (16 UC)", real[0]]] as const) res[name] = await call(extractPrompt(s))
  // CR đơn giản trên real 3.2: "Đăng xuất phải đăng xuất mọi thiết bị"
  const cr = `CR-001 (source: stakeholder_email, requester: PM): "Logging out must sign the user out of all devices, not only the current browser."`
  const ctx = real[0].blocks.map((b) => `[${b.id}] ${b.text}`).join("\n")
  res["C-2 clarify"] = await call(`You clarify a change request against an SRS. Return JSON {"ambiguous": boolean, "questions": string[], "targets": {"entity_paths": string[], "keywords": string[]}}.\n${cr}\nSpine projection: {"use_cases":[{"id":"UC-2.4","name":"Log out of system"},{"id":"UC-2.2","name":"Log in to system"}]}\nDocument outline:\n${ctx}`, 1024)
  res["C-4 propose"] = await call(`You propose SRS edits for a change request. For EVERY location give conclusion edit|comment|not_related with reason; for edit give new_text (full new block text). Return JSON {"locations":[{"location_id","conclusion","reason","new_text?","comment_text?","spine_ops":[]}]}.\n${cr}\nOwner step skill: (use-case naming: verb + object, English, <= 8 words)\nLocations:\n[L1][B0005] 3.2.4  Log out of system\n[L2][B0003] 3.2.2  Log in to system\n[L3][B0004] 3.2.3  Reset password`, 2048)
  console.log(JSON.stringify(res, null, 1))
}
