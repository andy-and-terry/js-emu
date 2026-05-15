
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

module.exports = {
  parse: s => { try { return new URL(s); } catch { return null; } },
  isValid: s => { try { new URL(s); return true; } catch { return false; } },
  join: (...parts) => parts.map((p, i) => i ? p.replace(/^\//, '') : p.replace(/\/$/, '')).join('/'),
  params: s => Object.fromEntries(new URL(s).searchParams),
  addParams: (url, params) => { const u = new URL(url); Object.entries(params).forEach(([k,v]) => u.searchParams.set(k, v)); return u.toString(); },
};