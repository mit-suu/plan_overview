async (page) => {
  const read = () => page.evaluate(() => { const sep = document.querySelector('[role=separator]'); return (sep ? sep.previousElementSibling : document.querySelector('main')).innerText; });
  const start = await read();
  await page.waitForTimeout(4000);
  for (let i = 0; i < 100; i++) {
    const t = await read();
    const tail = t.slice(-900);
    const busy = await page.getByRole('button', { name: 'Chạy bước này' }).count() === 0;
    const q = /CÂU HỎI \d+ \/ \d+/.test(tail) && !/Chờ bạn trả lời/.test(tail.slice(-200));
    const gate = /✓ Accept/.test(tail);
    const err = /lỗi|error|thất bại|failed/i.test(tail.slice(-300));
    if (t !== start && (q || gate || err || !busy && i > 3)) {
      await page.waitForTimeout(1500);
      const step = await page.evaluate(() => [...document.querySelectorAll('main *')].map(e => e.childElementCount === 0 ? e.textContent : '').find(s => /^[BS]-\d+(\.\d+)? ·/.test(s || '')) || '');
      const cut = t.length - start.length;
      return 'STEP: ' + step + '\n' + (cut > 0 ? t.slice(-Math.min(cut + 50, 3500)) : t.slice(-1500));
    }
    await page.waitForTimeout(3000);
  }
  return 'TIMEOUT\n' + (await read()).slice(-800);
}
