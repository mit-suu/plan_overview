const L = require("./lib.cjs"); const O = require("./ops.cjs");
const D = __dirname; const date = "2026-09-18T10:00:00Z"; const author = "CR-001";
const pick = (bs, pred) => { const b = bs.find(pred); if (!b) throw new Error("no block"); return b; };
(async () => {
  const log = {};
  // --- sample-baseline (Word-saved: có list, bảng, run định dạng)
  let pkg = await L.open(`${D}/out/sample-baseline.rt1.docx`);
  let bs = await L.blocks(pkg);
  const para = pick(bs, (b) => b.kind === "paragraph" && /students/.test(b.text) && L.kids(b.node, "r").length > 2);
  const cell = pick(bs, (b) => b.kind === "table_cell_p" && b.text.split(" ").length >= 3);
  const li = pick(bs, (b) => b.kind === "list_item" && /^BR-01/.test(b.text));
  log.para = O.applyEdit(para.node, para.text, para.text.replace("learn at their own pace", "learn at a guided pace with weekly deadlines"), { author, date });
  log.cell = O.applyEdit(cell.node, cell.text, cell.text.split(" ").slice(0, -1).join(" ") + " (revised by CR-001)", { author, date });
  log.li = O.applyEdit(li.node, li.text, li.text.replace("at least one lesson", "at least three lessons"), { author, date });
  log.comment = await O.addComment(pkg, pick(bs, (b) => b.kind === "heading" && b.text.length > 3).node, "CR-001: section reviewed, no change needed (not related).", { author, date });
  log.stampBefore = await O.readStamp(pkg);
  await O.writeStamp(pkg, { project_id: "66eeeeeeeeeeeeeeeeeeee01", version: "0.1", source: "cr_revision" });
  log.stampAfter = await O.readStamp(pkg);
  await pkg.save(`${D}/out/baseline.cr001.docx`);
  log.expect_texts = { para: para.text, cell: cell.text, li: li.text };
  // accept-all bằng code
  pkg = await L.open(`${D}/out/baseline.cr001.docx`); await O.acceptAll(pkg); await pkg.save(`${D}/out/baseline.cr001.clean.docx`);
  // --- real SRS 3.2 (Word, không có comments.xml, không có custom.xml)
  pkg = await L.open(`${D}/in/real-3.2.docx`);
  bs = await L.blocks(pkg);
  log.realStampBefore = await O.readStamp(pkg);
  const rp = pick(bs, (b) => /^3\.2\.4/.test(b.text));
  log.realPara = { text: rp.text, runs: L.kids(rp.node, "r").length };
  log.realEdit = O.applyEdit(rp.node, rp.text, rp.text.replace("Log out of system", "Sign out of the system on all devices"), { author: "CR-002", date });
  log.realComment = await O.addComment(pkg, pick(bs, (b) => /^3\.2\.2/.test(b.text)).node, "CR-002: login flow unchanged.", { author: "CR-002", date });
  await O.writeStamp(pkg, { project_id: "66eeeeeeeeeeeeeeeeeeee02", version: "0.1", source: "cr_revision" });
  await pkg.save(`${D}/out/real.cr002.docx`);
  log.realStampAfter = await O.readStamp(await L.open(`${D}/out/real.cr002.docx`));
  pkg = await L.open(`${D}/out/real.cr002.docx`); await O.acceptAll(pkg); await pkg.save(`${D}/out/real.cr002.clean.docx`);
  // --- ensureParaIds trên file docx-lib (không paraId)
  pkg = await L.open(`${D}/in/sample-baseline.docx`); log.paraIdsAdded = await O.ensureParaIds(pkg); await pkg.save(`${D}/out/baseline.withids.docx`);
  console.log(JSON.stringify(log, null, 1));
})().catch((e) => { console.error(e); process.exit(1); });
