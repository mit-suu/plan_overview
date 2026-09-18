const L = require("./lib.cjs");
const D = __dirname;
async function ids(f) { return (await L.blocks(await L.open(f))); }
function cmp(a, b) {
  const bm = new Map(b.map((x) => [x.paraId, x]));
  const withId = a.filter((x) => x.paraId);
  const kept = withId.filter((x) => bm.has(x.paraId));
  const sameText = kept.filter((x) => bm.get(x.paraId).text_hash === x.text_hash);
  // Blocks còn tồn tại theo text nhưng đổi paraId
  const bByHash = new Map(b.map((x) => [x.text_hash, x]));
  const moved = withId.filter((x) => !bm.has(x.paraId) && bByHash.has(x.text_hash));
  return { a: a.length, b: b.length, a_with_paraId: withId.length, kept: kept.length, kept_pct: withId.length ? (100 * kept.length / withId.length).toFixed(1) : "n/a", kept_same_text: sameText.length, lost_but_text_same: moved.length, dup_ids_b: b.length - new Set(b.map((x) => x.paraId)).size };
}
(async () => {
  for (const f of ["sample-baseline", "sample-draft", "real-3.2"]) {
    const orig = await ids(`${D}/in/${f}.docx`), rt1 = await ids(`${D}/out/${f}.rt1.docx`), rt2 = await ids(`${D}/out/${f}.rt2.docx`), ed = await ids(`${D}/out/${f}.edit.docx`);
    console.log(f, "\n  orig→rt1", JSON.stringify(cmp(orig, rt1)), "\n  rt1→rt2 ", JSON.stringify(cmp(rt1, rt2)), "\n  rt1→edit", JSON.stringify(cmp(rt1, ed)));
    const changed = rt1.filter((x) => { const y = ed.find((z) => z.paraId === x.paraId); return y && y.text_hash !== x.text_hash; });
    console.log("  edited paragraphs keeping paraId:", changed.map((x) => x.text.slice(0, 40)));
  }
})();
