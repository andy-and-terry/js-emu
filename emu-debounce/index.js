
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

module.exports = {
  debounce: (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; },
  throttle: (fn, ms) => { let last = 0; return (...a) => { const now = Date.now(); if (now - last >= ms) { last = now; return fn(...a); } }; },
  once: fn => { let called = false, result; return (...a) => { if (!called) { called = true; result = fn(...a); } return result; }; },
  memoize: (fn, key = JSON.stringify) => { const cache = new Map(); return (...a) => { const k = key(a); if (cache.has(k)) return cache.get(k); const r = fn(...a); cache.set(k, r); return r; }; },
};