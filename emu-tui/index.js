
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

const c = (n) => s => `\x1b[${n}m${s}\x1b[0m`;
module.exports = {
  box: (title, content, width = 40) => {
    const line = '─'.repeat(width - 2);
    const pad = s => s.padEnd(width - 4).slice(0, width - 4);
    return ['┌' + line + '┐', '│ ' + pad(title) + ' │', '├' + line + '┤', ...content.split('\n').map(l => '│ ' + pad(l) + ' │'), '└' + line + '┘'].join('\n');
  },
  table: (rows) => { const keys = Object.keys(rows[0]); const widths = keys.map(k => Math.max(k.length, ...rows.map(r => String(r[k]).length))); const row = r => keys.map((k,i) => String(r[k]).padEnd(widths[i])).join(' │ '); return [keys.map((k,i) => k.padEnd(widths[i])).join(' │ '), widths.map(w => '─'.repeat(w)).join('─┼─'), ...rows.map(row)].join('\n'); },
  clear: () => process.stdout.write('\x1b[2J\x1b[H'),
};