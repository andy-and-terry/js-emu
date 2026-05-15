
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

const words = s => s.replace(/([A-Z])/g, ' $1').replace(/[-_]/g, ' ').trim().toLowerCase().split(/\s+/);
module.exports = {
  camel: s => { const w = words(s); return w[0] + w.slice(1).map(x => x[0].toUpperCase() + x.slice(1)).join(''); },
  pascal: s => words(s).map(w => w[0].toUpperCase() + w.slice(1)).join(''),
  snake: s => words(s).join('_'),
  kebab: s => words(s).join('-'),
  title: s => words(s).map(w => w[0].toUpperCase() + w.slice(1)).join(' '),
  upper: s => words(s).join('_').toUpperCase(),
  lower: s => words(s).join(' ').toLowerCase(),
};