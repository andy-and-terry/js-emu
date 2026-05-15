
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

module.exports = {
  render: (tpl, data) => tpl.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_, key) => key.split('.').reduce((o, k) => o?.[k], data) ?? ''),
  compile: tpl => data => module.exports.render(tpl, data),
};