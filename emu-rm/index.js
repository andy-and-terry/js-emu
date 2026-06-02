#!/usr/bin/env node
#!/usr/bin/env node
const fs = require('fs'), path = require('path'), readline = require('readline');
const target = process.argv[2];
if (!target) { console.error('Usage: emu-rm <path>'); process.exit(1); }
if (!fs.existsSync(target)) { console.error('Not found: ' + target); process.exit(1); }
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('Delete ' + target + '? (y/N) ', a => { rl.close(); if (a.toLowerCase() === 'y') { fs.rmSync(target, { recursive: true }); console.log('Deleted: ' + target); } else console.log('Cancelled.'); });