const L = require("./lib.cjs");
const mode = process.argv[2];
(async () => {
  if (mode === "add") {
    for (const [src, out] of [["in/sample-baseline.docx", "out/bm-lib.docx"], ["out/sample-baseline.rt1.docx", "out/bm-word.docx"], ["in/real-3.2.docx", "out/bm-real.docx"]]) {
      const p = await L.open(src); const d = await p.xml("word/document.xml"); let k = 1;
      for (const b of await L.blocks(p)) {
        const s = d.createElementNS(L.W, "w:bookmarkStart"); s.setAttributeNS(L.W, "w:id", String(5000 + k)); s.setAttributeNS(L.W, "w:name", "_ff_B" + String(k).padStart(4, "0"));
        const e = d.createElementNS(L.W, "w:bookmarkEnd"); e.setAttributeNS(L.W, "w:id", String(5000 + k));
        const pPr = L.kids(b.node, "pPr")[0]; b.node.insertBefore(s, pPr ? pPr.nextSibling : b.node.firstChild); b.node.appendChild(e); k++;
      }
      await p.save(out);
    }
  } else {
    for (const f of process.argv.slice(3)) {
      const p = await L.open(f); const d = await p.xml("word/document.xml");
      const names = L.els(d, "bookmarkStart").map((x) => x.getAttributeNS(L.W, "name")).filter((n) => n.startsWith("_ff_"));
      // bookmark còn nằm trong đúng 1 đoạn?
      const inPara = L.els(d, "bookmarkStart").filter((x) => x.getAttributeNS(L.W, "name").startsWith("_ff_") && x.parentNode.localName === "p").length;
      console.log(f, "bookmarks _ff_:", names.length, "inside <w:p>:", inPara);
    }
  }
})();
