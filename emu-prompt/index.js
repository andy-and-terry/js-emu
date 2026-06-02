
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

const readline = require('readline');
function question(q, opts = {}) {
  return new Promise(resolve => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question(q + ' ', ans => { rl.close(); resolve(ans.trim()); });
  });
}
async function confirm(q) { const a = await question(q + ' (y/N)'); return a.toLowerCase() === 'y'; }
async function select(q, choices) {
  console.log(q); choices.forEach((c, i) => console.log('  ' + (i+1) + ') ' + c));
  const a = await question('Choice [1-' + choices.length + ']:');
  return choices[+a - 1];
}
module.exports = { question, confirm, select };