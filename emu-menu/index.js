
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

const readline = require('readline');
async function menu(title, choices) {
  return new Promise(resolve => {
    let selected = 0;
    const draw = () => { process.stdout.write('\x1b[2J\x1b[H' + title + '\n\n'); choices.forEach((c, i) => process.stdout.write((i === selected ? '  \x1b[36m> ' : '    ') + c + '\x1b[0m\n')); };
    readline.emitKeypressEvents(process.stdin);
    if (process.stdin.isTTY) process.stdin.setRawMode(true);
    draw();
    process.stdin.on('keypress', (_, key) => {
      if (key.name === 'up') selected = (selected - 1 + choices.length) % choices.length;
      else if (key.name === 'down') selected = (selected + 1) % choices.length;
      else if (key.name === 'return') { if (process.stdin.isTTY) process.stdin.setRawMode(false); process.stdin.pause(); resolve(choices[selected]); return; }
      else if (key.name === 'c' && key.ctrl) process.exit();
      draw();
    });
  });
}
module.exports = { menu };