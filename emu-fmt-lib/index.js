
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

module.exports = {
  padLeft: (s, n, c = ' ') => String(s).padStart(n, c),
  padRight: (s, n, c = ' ') => String(s).padEnd(n, c),
  repeat: (s, n) => s.repeat(n),
  wrap: (s, width) => s.match(new RegExp('.{1,' + width + '}(\\s|$)', 'g')).join('\n'),
  stripAnsi: s => s.replace(/\x1b\[[0-9;]*m/g, ''),
  pluralize: (n, word, plural) => n === 1 ? word : (plural || word + 's'),
  bytes: n => { const u = ['B','KB','MB','GB','TB']; let i = 0; while(n >= 1024 && i < u.length-1) { n/=1024; i++; } return n.toFixed(1)+u[i]; },
};