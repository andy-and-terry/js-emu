
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

module.exports = {
  chars: (s, n, end = '...') => s.length > n ? s.slice(0, n - end.length) + end : s,
  words: (s, n, end = '...') => { const w = s.split(' '); return w.length > n ? w.slice(0, n).join(' ') + end : s; },
  lines: (s, n, end = '...') => { const l = s.split('\n'); return l.length > n ? l.slice(0, n).join('\n') + end : s; },
  middle: (s, n) => s.length > n ? s.slice(0, Math.floor(n/2)) + '...' + s.slice(-Math.floor(n/2)) : s,
};