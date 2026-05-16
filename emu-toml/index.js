
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

function parse(text) {
  const result = {}, lines = text.split('\n');
  let section = result;
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const sectionMatch = trimmed.match(/^\[([\w.]+)\]$/);
    if (sectionMatch) { const keys = sectionMatch[1].split('.'); section = keys.reduce((o,k) => o[k] = o[k] || {}, result); continue; }
    const m = trimmed.match(/^([\w-]+)\s*=\s*(.+)$/);
    if (m) { let v = m[2].trim(); if (v.startsWith('"')) v = v.slice(1,-1); else if (v === 'true') v = true; else if (v === 'false') v = false; else if (!isNaN(v)) v = +v; section[m[1]] = v; }
  }
  return result;
}
module.exports = { parse };