
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

module.exports = {
  slugify: (s, sep = '-') => s.toLowerCase().replace(/[^a-z0-9]+/g, sep).replace(new RegExp('^' + sep + '|' + sep + '$', 'g'), ''),
  deslugify: s => s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
};