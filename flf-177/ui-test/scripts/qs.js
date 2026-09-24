async (page) => {
  const txt = () => page.evaluate(() => { const sep = document.querySelector('[role=separator]'); return (sep ? sep.previousElementSibling : document.querySelector('main')).innerText; });
  const t0 = await txt();
  const m = t0.match(/CÂU HỎI \d+ \/ (\d+)/);
  if (!m) return 'NO QUESTION CARD\n' + t0.slice(-1500);
  const n = +m[1]; const out = [];
  for (let k = 1; k <= n; k++) {
    const b = page.getByRole('button', { name: String(k), exact: true });
    if (await b.count()) { await b.last().click(); await page.waitForTimeout(250); }
    const t = await txt(); const i = t.lastIndexOf('CÂU HỎI ' + k + ' /');
    let s = t.slice(i); s = s.slice(0, s.search(/Phần tự trả lời/));
    out.push(s.replace(/\n(\d|✕)\n/g, '\n').replace(/\n+/g, ' | '));
  }
  return out.join('\n');
}
