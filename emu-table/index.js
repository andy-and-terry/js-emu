
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

module.exports = {
  render: (rows, opts = {}) => {
    if (!rows.length) return '(empty)';
    const keys = opts.columns || Object.keys(rows[0]);
    const widths = keys.map(k => Math.max(k.length, ...rows.map(r => String(r[k] ?? '').length)));
    const sep = '+-' + widths.map(w => '-'.repeat(w)).join('-+-') + '-+';
    const rowStr = r => '| ' + keys.map((k,i) => String(r[k] ?? '').padEnd(widths[i])).join(' | ') + ' |';
    return [sep, rowStr(Object.fromEntries(keys.map(k => [k, k]))), sep, ...rows.map(rowStr), sep].join('\n');
  }
};