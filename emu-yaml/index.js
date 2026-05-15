
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

// Basic YAML subset parser
function parse(text) {
  const result = {}, lines = text.split('\n');
  for (const line of lines) {
    const m = line.match(/^([\w-]+):\s*(.*)$/);
    if (m) { let v = m[2].trim(); if (v === 'true') v = true; else if (v === 'false') v = false; else if (!isNaN(v) && v !== '') v = +v; result[m[1]] = v; }
  }
  return result;
}
function stringify(obj, indent = 0) { return Object.entries(obj).map(([k,v]) => ' '.repeat(indent) + k + ': ' + (typeof v === 'object' ? '\n' + stringify(v, indent+2) : v)).join('\n'); }
module.exports = { parse, stringify };