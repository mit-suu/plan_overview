// Thư viện nháp cho spike P0 — KHÔNG merge. Dùng jszip + @xmldom/xmldom từ node_modules của flintflow_be.
const path = require("path");
const BE = "D:/ky_9/VUA/FlintFlow/flintflow_be/node_modules/";
const JSZip = require(BE + "jszip");
const { DOMParser, XMLSerializer } = require(BE + "@xmldom/xmldom");
const fs = require("fs");
const crypto = require("crypto");

const W = "http://schemas.openxmlformats.org/wordprocessingml/2006/main";
const W14 = "http://schemas.microsoft.com/office/word/2010/wordml";
const R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships";

async function open(file) {
  const buf = fs.readFileSync(file);
  const zip = await JSZip.loadAsync(buf);
  const pkg = { zip, parts: {} };
  pkg.xml = async (name) => {
    if (!pkg.parts[name]) {
      const f = zip.file(name);
      if (!f) return null;
      pkg.parts[name] = new DOMParser().parseFromString(await f.async("string"), "text/xml");
    }
    return pkg.parts[name];
  };
  pkg.save = async (out) => {
    for (const [name, doc] of Object.entries(pkg.parts)) zip.file(name, new XMLSerializer().serializeToString(doc));
    fs.writeFileSync(out, await zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" }));
  };
  return pkg;
}

const els = (node, local) => Array.from(node.getElementsByTagNameNS(W, local));
const kids = (node, local) => Array.from(node.childNodes).filter((n) => n.nodeType === 1 && n.namespaceURI === W && (!local || n.localName === local));
const textOf = (p) => els(p, "t").filter((t) => !isInside(t, "del")).map((t) => t.textContent).join("");
function isInside(n, local) { for (let x = n.parentNode; x; x = x.parentNode) if (x.localName === local && x.namespaceURI === W) return true; return false; }
const hash = (s) => crypto.createHash("sha1").update(s.replace(/\s+/g, " ").trim()).digest("hex").slice(0, 12);

// Liệt kê block: paragraph (kể cả trong ô bảng) kèm paraId, style, numPr, vị trí.
async function blocks(pkg) {
  const doc = await pkg.xml("word/document.xml");
  const body = els(doc, "body")[0];
  // styleId phụ thuộc ngôn ngữ Word (vd. "u1" = Đề mục 1) ⇒ phân giải qua w:name + outlineLvl (theo basedOn)
  const st = await pkg.xml("word/styles.xml");
  const styles = new Map();
  for (const s of els(st, "style")) {
    const pPr = kids(s, "pPr")[0];
    styles.set(s.getAttributeNS(W, "styleId"), { name: kids(s, "name")[0]?.getAttributeNS(W, "val") || "", based: kids(s, "basedOn")[0]?.getAttributeNS(W, "val"), lvl: pPr && kids(pPr, "outlineLvl")[0]?.getAttributeNS(W, "val") });
  }
  const levelOf = (id) => { for (let k = 0, x = styles.get(id); x && k < 10; k++, x = styles.get(x.based)) { const m = /^heading (\d)$/i.exec(x.name); if (m) return +m[1]; if (x.lvl != null) return +x.lvl + 1; if (/^title$/i.test(x.name)) return 0; } return null; };
  const out = [];
  let ord = 0;
  const walk = (node, ctx) => {
    for (const c of kids(node)) {
      if (c.localName === "p") {
        const pPr = kids(c, "pPr")[0];
        const style = pPr && kids(pPr, "pStyle")[0]?.getAttributeNS(W, "val");
        const num = pPr && kids(pPr, "numPr")[0];
        const t = textOf(c);
        const oLvl = pPr && kids(pPr, "outlineLvl")[0]?.getAttributeNS(W, "val");
        const level = oLvl != null ? +oLvl + 1 : style ? levelOf(style) : null;
        out.push({ ord: ord++, kind: ctx.cell ? "table_cell_p" : level != null && level < 10 ? "heading" : num ? "list_item" : "paragraph", level,
          paraId: c.getAttributeNS(W14, "paraId") || null, style: style || null, styleName: style ? styles.get(style)?.name : null, text: t, text_hash: hash(t), node: c, ctx });
      } else if (c.localName === "tbl") {
        kids(c, "tr").forEach((tr, ri) => kids(tr, "tc").forEach((tc, ci) => walk(tc, { cell: [ri, ci] })));
      } else if (c.localName === "sdt") {
        const sc = kids(c, "sdtContent")[0]; if (sc) walk(sc, ctx);
      }
    }
  };
  walk(body, {});
  return out;
}

module.exports = { open, blocks, els, kids, textOf, hash, W, W14, R, JSZip, DOMParser, XMLSerializer, fs, path };
