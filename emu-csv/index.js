
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

const fs = require('fs');
module.exports = {
  parse: (text) => { const lines = text.trim().split('\n'); const headers = lines[0].split(','); return lines.slice(1).map(l => Object.fromEntries(l.split(',').map((v,i) => [headers[i], v.trim()]))); },
  stringify: (rows) => { if (!rows.length) return ''; const keys = Object.keys(rows[0]); return [keys.join(','), ...rows.map(r => keys.map(k => r[k]).join(','))].join('\n'); },
  readFile: (file) => module.exports.parse(fs.readFileSync(file, 'utf8')),
  writeFile: (file, rows) => fs.writeFileSync(file, module.exports.stringify(rows)),
};