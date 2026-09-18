// Thao tác OOXML nháp: applyEdit (Track Changes), addComment, stamp, acceptAll, ensureParaIds.
const L = require("./lib.cjs");
const { W, W14, kids, els } = L;

let nextId = 9000;
const ce = (doc, local) => doc.createElementNS(W, "w:" + local);
const setA = (el, local, v) => el.setAttributeNS(W, "w:" + local, v);

function runText(r) { return kids(r).map((c) => (c.localName === "t" ? c.textContent : c.localName === "tab" ? "\t" : "")).join(""); }

// Tách run tại offset ký tự (offset nằm trong run) ⇒ run thứ hai được chèn ngay sau.
function splitRun(r, at) {
  const doc = r.ownerDocument;
  const t = kids(r, "t");
  if (t.length !== 1) throw new Error("spike: run có nhiều w:t/tab chưa hỗ trợ");
  const s = t[0].textContent;
  const r2 = r.cloneNode(true);
  t[0].textContent = s.slice(0, at); t[0].setAttribute("xml:space", "preserve");
  const t2 = kids(r2, "t")[0]; t2.textContent = s.slice(at); t2.setAttribute("xml:space", "preserve");
  r.parentNode.insertBefore(r2, r.nextSibling);
  return r2;
}

function runsWithOffsets(p) {
  let o = 0;
  return kids(p, "r").map((r) => { const t = runText(r); const x = { r, start: o, end: o + t.length }; o += t.length; return x; });
}

function tokens(s) { return s.match(/\s+|[^\s]+/g) || []; }

// Diff theo từ: chỉ bọc phần giữa khác nhau (tiền tố/hậu tố chung giữ nguyên).
function applyEdit(p, oldText, newText, { author, date }) {
  const doc = p.ownerDocument;
  const cur = runsWithOffsets(p).map((x) => runText(x.r)).join("");
  if (cur !== oldText) throw new Error(`CR_OLD_TEXT_MISMATCH: "${cur.slice(0, 40)}" ≠ "${oldText.slice(0, 40)}"`);
  const a = tokens(oldText), b = tokens(newText);
  let i = 0; while (i < a.length && i < b.length && a[i] === b[i]) i++;
  let j = 0; while (j < a.length - i && j < b.length - i && a[a.length - 1 - j] === b[b.length - 1 - j]) j++;
  const delStart = a.slice(0, i).join("").length, delEnd = oldText.length - a.slice(a.length - j).join("").length;
  const insText = b.slice(i, b.length - j).join("");
  // tách run tại 2 biên
  for (const off of [delEnd, delStart]) {
    const x = runsWithOffsets(p).find((x) => x.start < off && off < x.end);
    if (x) splitRun(x.r, off - x.start);
  }
  const rs = runsWithOffsets(p);
  const inside = rs.filter((x) => x.start >= delStart && x.end <= delEnd && x.end > x.start);
  const anchorRun = inside[0]?.r || rs.find((x) => x.end === delStart)?.r || rs[0]?.r;
  let after = rs.filter((x) => x.end <= delStart).pop()?.r || null; // chèn sau run này
  for (const x of inside) {
    const del = ce(doc, "del"); setA(del, "id", String(nextId++)); setA(del, "author", author); setA(del, "date", date);
    p.insertBefore(del, x.r); del.appendChild(x.r);
    for (const t of kids(x.r, "t")) { const dt = ce(doc, "delText"); dt.setAttribute("xml:space", "preserve"); dt.textContent = t.textContent; x.r.replaceChild(dt, t); }
    after = del;
  }
  if (insText) {
    const ins = ce(doc, "ins"); setA(ins, "id", String(nextId++)); setA(ins, "author", author); setA(ins, "date", date);
    const r = ce(doc, "r");
    const rPr = anchorRun && kids(anchorRun, "rPr")[0]; if (rPr) r.appendChild(rPr.cloneNode(true));
    const t = ce(doc, "t"); t.setAttribute("xml:space", "preserve"); t.textContent = insText; r.appendChild(t); ins.appendChild(r);
    const ref = after ? after.nextSibling : (kids(p, "pPr")[0]?.nextSibling ?? p.firstChild);
    p.insertBefore(ins, ref);
  }
  return { deleted: oldText.slice(delStart, delEnd), inserted: insText };
}

async function ensurePart(pkg, name, contentType, relsName, relType, target, rootXml) {
  let doc = await pkg.xml(name);
  if (doc) return doc;
  pkg.zip.file(name, rootXml);
  doc = await pkg.xml(name);
  const ct = await pkg.xml("[Content_Types].xml");
  const o = ct.createElementNS("http://schemas.openxmlformats.org/package/2006/content-types", "Override");
  o.setAttribute("PartName", "/" + name); o.setAttribute("ContentType", contentType); ct.documentElement.appendChild(o);
  const rels = await pkg.xml(relsName);
  const RN = "http://schemas.openxmlformats.org/package/2006/relationships";
  const ids = Array.from(rels.getElementsByTagNameNS(RN, "Relationship")).map((r) => r.getAttribute("Id"));
  const rel = rels.createElementNS(RN, "Relationship");
  let k = 1; while (ids.includes("rId" + k)) k++;
  rel.setAttribute("Id", "rId" + k); rel.setAttribute("Type", relType); rel.setAttribute("Target", target);
  rels.documentElement.appendChild(rel);
  return doc;
}

async function addComment(pkg, p, text, { author, date }) {
  const cdoc = await ensurePart(pkg, "word/comments.xml", "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml",
    "word/_rels/document.xml.rels", "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments", "comments.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:comments xmlns:w="${W}"></w:comments>`);
  const used = els(cdoc, "comment").map((c) => +c.getAttributeNS(W, "id"));
  const id = String((used.length ? Math.max(...used) : -1) + 1);
  const c = ce(cdoc, "comment"); setA(c, "id", id); setA(c, "author", author); setA(c, "date", date); setA(c, "initials", author.replace(/[^A-Z0-9]/g, ""));
  const cp = ce(cdoc, "p"); const cr = ce(cdoc, "r"); const ct = ce(cdoc, "t"); ct.textContent = text; cr.appendChild(ct); cp.appendChild(cr); c.appendChild(cp);
  cdoc.documentElement.appendChild(c);
  const doc = p.ownerDocument;
  const s = ce(doc, "commentRangeStart"); setA(s, "id", id);
  const e = ce(doc, "commentRangeEnd"); setA(e, "id", id);
  const rr = ce(doc, "r"); const ref = ce(doc, "commentReference"); setA(ref, "id", id); rr.appendChild(ref);
  const pPr = kids(p, "pPr")[0];
  p.insertBefore(s, pPr ? pPr.nextSibling : p.firstChild);
  p.appendChild(e); p.appendChild(rr);
  return id;
}

const CP = "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties";
const VT = "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes";
async function readStamp(pkg) {
  const d = await pkg.xml("docProps/custom.xml");
  if (!d) return null;
  const o = {};
  for (const p of Array.from(d.getElementsByTagNameNS(CP, "property"))) o[p.getAttribute("name")] = p.textContent;
  return o.flintflow_project_id ? { project_id: o.flintflow_project_id, version: o.flintflow_version ?? null, source: o.flintflow_source ?? null } : null;
}
async function writeStamp(pkg, stamp) {
  const d = await ensurePart(pkg, "docProps/custom.xml", "application/vnd.openxmlformats-officedocument.custom-properties+xml",
    "_rels/.rels", "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties", "docProps/custom.xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Properties xmlns="${CP}" xmlns:vt="${VT}"></Properties>`);
  const props = Array.from(d.getElementsByTagNameNS(CP, "property"));
  let pid = Math.max(1, ...props.map((p) => +p.getAttribute("pid")));
  for (const [k, v] of Object.entries(stamp)) {
    const name = "flintflow_" + k;
    let p = props.find((x) => x.getAttribute("name") === name);
    if (!p) { p = d.createElementNS(CP, "property"); p.setAttribute("fmtid", "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}"); p.setAttribute("pid", String(++pid)); p.setAttribute("name", name); d.documentElement.appendChild(p); }
    while (p.firstChild) p.removeChild(p.firstChild);
    const s = d.createElementNS(VT, "vt:lpwstr"); s.textContent = v; p.appendChild(s);
  }
}

// Accept all: bỏ w:del/moveFrom, bóc w:ins/moveTo, bỏ *PrChange; bỏ comment có author CR-*.
async function acceptAll(pkg) {
  const parts = Object.keys(pkg.zip.files).filter((n) => /^word\/(document|header\d*|footer\d*|footnotes|endnotes)\.xml$/.test(n));
  for (const name of parts) {
    const d = await pkg.xml(name);
    for (const loc of ["del", "moveFrom"]) for (const x of els(d, loc)) {
      if (x.parentNode.localName === "rPr") { // dấu đoạn bị xoá: gộp đoạn (spike: chỉ bỏ đánh dấu)
        x.parentNode.removeChild(x); continue;
      }
      x.parentNode.removeChild(x);
    }
    for (const loc of ["ins", "moveTo"]) for (const x of els(d, loc)) {
      if (x.parentNode.localName === "rPr") { x.parentNode.removeChild(x); continue; }
      while (x.firstChild) x.parentNode.insertBefore(x.firstChild, x); x.parentNode.removeChild(x);
    }
    for (const loc of ["rPrChange", "pPrChange", "sectPrChange", "tblPrChange", "tcPrChange", "trPrChange", "moveFromRangeStart", "moveFromRangeEnd", "moveToRangeStart", "moveToRangeEnd"]) for (const x of els(d, loc)) x.parentNode.removeChild(x);
  }
  const cdoc = await pkg.xml("word/comments.xml");
  if (cdoc) {
    const drop = new Set(els(cdoc, "comment").filter((c) => /^CR-\d+$/.test(c.getAttributeNS(W, "author"))).map((c) => c.getAttributeNS(W, "id")));
    for (const c of els(cdoc, "comment")) if (drop.has(c.getAttributeNS(W, "id"))) c.parentNode.removeChild(c);
    const d = await pkg.xml("word/document.xml");
    for (const loc of ["commentRangeStart", "commentRangeEnd", "commentReference"]) for (const x of els(d, loc)) if (drop.has(x.getAttributeNS(W, "id"))) {
      const n = loc === "commentReference" ? x.parentNode : x; n.parentNode.removeChild(n);
    }
  }
}

// Gán w14:paraId cho đoạn chưa có (file do docx lib / LibreOffice / Google Docs sinh).
async function ensureParaIds(pkg) {
  const d = await pkg.xml("word/document.xml");
  const root = d.documentElement;
  if (!root.getAttribute("xmlns:w14")) root.setAttribute("xmlns:w14", W14);
  const ign = root.getAttributeNS("http://schemas.openxmlformats.org/markup-compatibility/2006", "Ignorable") || root.getAttribute("mc:Ignorable") || "";
  if (!/\bw14\b/.test(ign)) root.setAttribute("mc:Ignorable", (ign + " w14").trim());
  let n = 0; const used = new Set(els(d, "p").map((p) => p.getAttributeNS(W14, "paraId")).filter(Boolean));
  let seq = 0x10000001;
  for (const p of els(d, "p")) if (!p.getAttributeNS(W14, "paraId")) {
    let id; do { id = (seq++).toString(16).toUpperCase().padStart(8, "0"); } while (used.has(id));
    p.setAttributeNS(W14, "w14:paraId", id); n++;
  }
  return n;
}

module.exports = { applyEdit, addComment, readStamp, writeStamp, acceptAll, ensureParaIds, runText };
