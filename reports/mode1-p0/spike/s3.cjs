// Bước 6 (preflight nhận diện) + bước 7 (watermark DRAFT nhiều section)
const L = require("./lib.cjs"); const O = require("./ops.cjs");
const fs = L.fs; const { W, R, els, kids } = L;
const utf16 = (s) => Buffer.from(s, "utf16le");

async function preflight(file) {
  const buf = fs.readFileSync(file);
  const issues = [];
  const sig = buf.subarray(0, 4).toString("hex");
  if (sig === "d0cf11e0") {
    if (buf.includes(utf16("EncryptionInfo")) || buf.includes(utf16("EncryptedPackage"))) return { status: "rejected", issues: [{ code: "FILE_ENCRYPTED", message: "File có mật khẩu" }] };
    if (buf.includes(utf16("WordDocument"))) return { status: "rejected", issues: [{ code: "LEGACY_DOC", message: "File .doc (Word 97-2003), hãy lưu lại dạng .docx" }] };
    return { status: "rejected", issues: [{ code: "NOT_DOCX", message: "File OLE không nhận diện được" }] };
  }
  if (sig !== "504b0304") return { status: "rejected", issues: [{ code: "NOT_DOCX", message: "Không phải file zip/.docx" }] };
  let pkg; try { pkg = await L.open(file); } catch { return { status: "rejected", issues: [{ code: "CORRUPT_ZIP", message: "Zip hỏng" }] }; }
  if (!pkg.zip.file("word/document.xml")) return { status: "rejected", issues: [{ code: "NOT_DOCX", message: "Thiếu word/document.xml" }] };
  const bs = await L.blocks(pkg);
  const where = (n) => { for (let x = n; x; x = x.parentNode) if (x.localName === "p" && x.namespaceURI === W) { const b = bs.find((b) => b.node === x); return b ? { block_ord: b.ord, text: b.text.slice(0, 50) } : null; } return null; };
  const d = await pkg.xml("word/document.xml");
  for (const loc of ["ins", "del", "moveFrom", "moveTo", "rPrChange", "pPrChange"]) for (const x of els(d, loc)) {
    const a = x.getAttributeNS(W, "author");
    if (!/^CR-\d+$/.test(a)) issues.push({ code: "FOREIGN_TRACK_CHANGE", message: `Track Changes (${loc}) của "${a}" chưa được Accept/Reject`, location: where(x) });
  }
  const c = await pkg.xml("word/comments.xml");
  if (c) for (const x of els(c, "comment")) {
    const a = x.getAttributeNS(W, "author"); const id = x.getAttributeNS(W, "id");
    if (!/^CR-\d+$/.test(a)) issues.push({ code: "FOREIGN_COMMENT", message: `Comment của "${a}" chưa được xử lý`, location: where(els(d, "commentRangeStart").find((s) => s.getAttributeNS(W, "id") === id)) });
  }
  const stamp = await O.readStamp(pkg);
  return { status: issues.length ? "rejected" : "accepted", issues, stamp };
}

const HDR_NS = `xmlns:w="${W}" xmlns:r="${R}" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w10="urn:schemas-microsoft-com:office:word"`;
const WM = (n) => `<w:p xmlns:w="${W}" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w10="urn:schemas-microsoft-com:office:word"><w:pPr><w:pStyle w:val="Header"/></w:pPr><w:r><w:pict><v:shapetype id="_x0000_t136" coordsize="21600,21600" o:spt="136" adj="10800" path="m@7,l@8,m@5,21600l@6,21600e"><v:formulas><v:f eqn="sum #0 0 10800"/><v:f eqn="prod #0 2 1"/><v:f eqn="sum 21600 0 @1"/><v:f eqn="sum 0 0 @2"/><v:f eqn="sum 21600 0 @3"/><v:f eqn="if @0 @3 0"/><v:f eqn="if @0 21600 @1"/><v:f eqn="if @0 0 @2"/><v:f eqn="if @0 @4 21600"/><v:f eqn="mid @5 @6"/><v:f eqn="mid @8 @5"/><v:f eqn="mid @7 @8"/><v:f eqn="mid @6 @7"/><v:f eqn="sum @6 0 @5"/></v:formulas><v:path textpathok="t" o:connecttype="custom" o:connectlocs="@9,0;@10,10800;@11,21600;@12,10800" o:connectangles="270,180,90,0"/><v:textpath on="t" fitshape="t"/><o:lock v:ext="edit" text="t" shapetype="t"/></v:shapetype><v:shape id="FFWatermark${n}" o:spid="_x0000_s${2049 + n}" type="#_x0000_t136" style="position:absolute;margin-left:0;margin-top:0;width:412pt;height:137pt;rotation:315;z-index:-251657216;mso-position-horizontal:center;mso-position-horizontal-relative:margin;mso-position-vertical:center;mso-position-vertical-relative:margin" o:allowincell="f" fillcolor="silver" stroked="f"><v:fill opacity=".5"/><v:textpath style="font-family:&quot;Calibri&quot;;font-size:1pt" string="DRAFT"/><w10:wrap anchorx="margin" anchory="margin"/></v:shape></w:pict></w:r></w:p>`;

async function watermark(pkg) {
  const d = await pkg.xml("word/document.xml");
  const rels = await pkg.xml("word/_rels/document.xml.rels");
  const RN = "http://schemas.openxmlformats.org/package/2006/relationships";
  const relOf = (id) => Array.from(rels.getElementsByTagNameNS(RN, "Relationship")).find((r) => r.getAttribute("Id") === id);
  const sects = els(d, "sectPr").filter((s) => s.parentNode.localName !== "rPr" && s.parentNode.localName !== "sectPrChange");
  const settings = await pkg.xml("word/settings.xml");
  const evenOdd = settings && els(settings, "evenAndOddHeaders").length > 0;
  // Section đầu thiếu header ⇒ tạo header mới (các section sau kế thừa)
  const first = sects[0]; let created = 0;
  const need = ["default", ...(kids(first, "titlePg").length ? ["first"] : []), ...(evenOdd ? ["even"] : [])];
  for (const type of need) if (!kids(first, "headerReference").some((h) => h.getAttributeNS(W, "type") === type)) {
    let k = 1; while (pkg.zip.file(`word/header${k}.xml`)) k++;
    const name = `word/header${k}.xml`;
    pkg.zip.file(name, `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:hdr ${HDR_NS}></w:hdr>`);
    const ct = await pkg.xml("[Content_Types].xml"); const o = ct.createElementNS("http://schemas.openxmlformats.org/package/2006/content-types", "Override");
    o.setAttribute("PartName", "/" + name); o.setAttribute("ContentType", "application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml"); ct.documentElement.appendChild(o);
    const ids = Array.from(rels.getElementsByTagNameNS(RN, "Relationship")).map((r) => r.getAttribute("Id")); let j = 1; while (ids.includes("rIdFF" + j)) j++;
    const rel = rels.createElementNS(RN, "Relationship"); rel.setAttribute("Id", "rIdFF" + j); rel.setAttribute("Type", "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header"); rel.setAttribute("Target", `header${k}.xml`); rels.documentElement.appendChild(rel);
    const hr = d.createElementNS(W, "w:headerReference"); hr.setAttributeNS(W, "w:type", type); hr.setAttributeNS(R, "r:id", "rIdFF" + j);
    first.insertBefore(hr, first.firstChild); created++;
  }
  // Thêm watermark vào mọi header part được tham chiếu
  const parts = new Set(); for (const s of sects) for (const h of kids(s, "headerReference")) parts.add("word/" + relOf(h.getAttributeNS(R, "id")).getAttribute("Target"));
  let n = 0;
  for (const name of parts) {
    const h = await pkg.xml(name);
    const frag = new L.DOMParser().parseFromString(WM(n++), "text/xml").documentElement;
    h.documentElement.appendChild(h.importNode(frag, true));
  }
  return { headerParts: [...parts], created };
}

(async () => {
  const D = __dirname;
  for (const f of ["out/foreign.docx", "out/encrypted.docx", "out/legacy.doc", "out/legacy-renamed.docx", "out/baseline.cr001.docx", "in/real-3.2.docx", "in/sample-baseline.docx", "s1.cjs"]) console.log(f.padEnd(26), JSON.stringify(await preflight(`${D}/${f}`)));
  for (const [src, out] of [["out/sections.docx", "out/sections.wm.docx"], ["in/real-3.2.docx", "out/real.wm.docx"], ["out/baseline.cr001.docx", "out/baseline.cr001.wm.docx"]]) {
    const p = await L.open(`${D}/${src}`); console.log("watermark", src, JSON.stringify(await watermark(p))); await p.save(`${D}/${out}`);
  }
})().catch((e) => { console.error(e); process.exit(1); });
