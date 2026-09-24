async (page) => {
  
  const answers = __ANS__;
  for (let k = 0; k < answers.length; k++) {
    const b = page.getByRole('button', { name: String(k + 1), exact: true });
    if (await b.count()) { await b.last().click(); await page.waitForTimeout(300); }
    const a = answers[k];
    for (const lab of [].concat(a.pick || [])) { await page.getByRole('button', { name: lab }).last().click(); await page.waitForTimeout(200); }
    if (a.text) { await page.getByRole('textbox', { name: /Nhập câu trả lời riêng/ }).last().fill(a.text); }
  }
  await page.getByRole('button', { name: /Gửi câu trả lời/ }).last().click();
  await page.waitForTimeout(3000);
  const read = () => page.evaluate(() => { const sep = document.querySelector('[role=separator]'); return (sep ? sep.previousElementSibling : document.querySelector('main')).innerText; });
  let prev = '', same = 0;
  for (let i = 0; i < 90; i++) { const t = await read(); if (t === prev) { if (++same >= 3) break; } else same = 0; prev = t; await page.waitForTimeout(2000); }
  return prev.slice(-1400);
}
