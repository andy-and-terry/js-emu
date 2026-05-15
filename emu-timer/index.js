#!/usr/bin/env node
#!/usr/bin/env node
const [,, mode, val] = process.argv;
if (mode === 'count' && val) {
  let s = +val; const iv = setInterval(() => { process.stdout.write('\r' + s-- + 's '); if (s < 0) { clearInterval(iv); console.log('\nDone!'); } }, 1000);
} else { const start = Date.now(); console.log('Stopwatch started. Ctrl+C to stop.'); process.on('SIGINT', () => { console.log('\nElapsed: ' + ((Date.now()-start)/1000).toFixed(2) + 's'); process.exit(); }); setInterval(() => process.stdout.write('\r' + ((Date.now()-start)/1000).toFixed(1) + 's'), 100); }