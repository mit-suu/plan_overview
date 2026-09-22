async (page) => {
  const STOP = __STOP__;           // stop at gate of this step (do not accept)
  const DIR = 'd:/Learning/Capstone/FlintFlow/context project/claude_output/flf-177-ui-test/';
  const T0 = Date.now(), LIMIT = __LIMIT__ * 1000;
  const log = [];
  const chat = () => page.evaluate(() => { const sep = document.querySelector('[role=separator]'); return (sep ? sep.previousElementSibling : document.querySelector('main')).innerText; });
  const stepNow = () => page.evaluate(() => [...document.querySelectorAll('main *')].map(e => e.childElementCount === 0 ? e.textContent : '').find(s => /^[BS]-\d+(\.\d+)? ·/.test(s || '')) || '');
  let lastAction = Date.now();
  while (Date.now() - T0 < LIMIT) {
    const step = (await stepNow()).split(' ·')[0];
    const t = await chat(); const tail = t.slice(-1200);
    const accept = page.getByRole('button', { name: '✓ Accept' });
    if (await accept.count() && await accept.last().isEnabled().catch(() => false)) {
      const flags = (tail.match(/Kiểm tra: [^\n]*/g) || []).pop() || '';
      const ops = (tail.match(/Đã ghi [^\n]*/g) || []).pop() || '';
      await page.screenshot({ path: DIR + 'gate-' + step + '.png' });
      log.push(`GATE ${step} | ${ops} | ${flags}`);
      if (step === STOP) return log.join('\n') + '\nSTOPPED at gate ' + step;
      await accept.last().click({ timeout: 5000 }).catch(() => {}); lastAction = Date.now();
      await page.waitForTimeout(4000); continue;
    }
    const m = tail.match(/CÂU HỎI \d+ \/ (\d+)/);
    const send = page.getByRole('button', { name: /Gửi câu trả lời/ });
    if (m && !/Chờ bạn trả lời \d+ câu hỏi\n[^\n]*$/.test(tail.trim()) && await page.getByRole('button', { name: /Tiếp tục|Gửi câu trả lời/ }).count()) {
      const n = +m[1];
      for (let k = 1; k <= n; k++) {
        const b = page.getByRole('button', { name: String(k), exact: true });
        if (await b.count()) { await b.last().click(); await page.waitForTimeout(300); }
        const tt = await chat(); const i = tt.lastIndexOf('CÂU HỎI ' + k + ' /');
        const card = tt.slice(i);
        const q = card.split('\n').find(l => /\?\s*(\(.*\))?$/.test(l.trim()) && l.length > 15) || card.split('\n')[6];
        const opts = card.slice(card.search(/Gợi ý câu trả lời mẫu[^\n]*\n/)).split('\n').slice(1);
        const first = opts[0];
        let picked = first;
        try { await page.getByRole('button', { name: first, exact: true }).last().click(); } catch (e) { picked = 'CLICK FAIL ' + first; }
        log.push(`Q[${step}] ${q} => ${picked}`);
        await page.waitForTimeout(250);
      }
      await send.last().click({ timeout: 5000 }).catch(() => {}); lastAction = Date.now();
      await page.waitForTimeout(4000); continue;
    }
    if (/lỗi|thất bại|failed|error/i.test(tail.slice(-250)) && Date.now() - lastAction > 8000) {
      await page.screenshot({ path: DIR + 'error-' + step + '.png' });
      return log.join('\n') + '\nERROR at ' + step + ':\n' + tail.slice(-600);
    }
    const run = page.getByRole('button', { name: 'Chạy bước này' });
    if (await run.count() && Date.now() - lastAction > 5000) {
      if (step === STOP && log.some(l => l.startsWith('GATE ' + STOP))) return log.join('\n');
      log.push(`RUN ${step}`);
      await run.click({ timeout: 5000 }).catch(() => {}); lastAction = Date.now();
      await page.waitForTimeout(4000); continue;
    }
    await page.waitForTimeout(3000);
  }
  return log.join('\n') + '\nTIME LIMIT; step=' + (await stepNow()) + '\n' + (await chat()).slice(-500);
}
