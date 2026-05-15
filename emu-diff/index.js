#!/usr/bin/env node
#!/usr/bin/env node
const fs = require('fs'), [a, b] = process.argv.slice(2);
if (!a || !b) { console.error('Usage: emu-diff <file1> <file2>'); process.exit(1); }
const la = fs.readFileSync(a,'utf8').split('\n'), lb = fs.readFileSync(b,'utf8').split('\n');
const max = Math.max(la.length, lb.length);
for (let i = 0; i < max; i++) {
  if (la[i] !== lb[i]) { if (la[i] !== undefined) console.log('- ' + la[i]); if (lb[i] !== undefined) console.log('+ ' + lb[i]); }
}