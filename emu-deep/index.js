
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

module.exports = {
  clone: obj => JSON.parse(JSON.stringify(obj)),
  merge: (target, ...sources) => { for (const src of sources) { for (const [k, v] of Object.entries(src)) { target[k] = v && typeof v === 'object' && !Array.isArray(v) ? module.exports.merge(target[k] || {}, v) : v; } } return target; },
  diff: (a, b) => { const keys = new Set([...Object.keys(a), ...Object.keys(b)]); const result = {}; for (const k of keys) { if (JSON.stringify(a[k]) !== JSON.stringify(b[k])) result[k] = { from: a[k], to: b[k] }; } return result; },
  get: (obj, path, def) => path.split('.').reduce((o, k) => o?.[k], obj) ?? def,
  set: (obj, path, val) => { const keys = path.split('.'); keys.slice(0,-1).reduce((o,k) => o[k] = o[k] || {}, obj)[keys.pop()] = val; return obj; },
  flatten: (obj, prefix = '') => Object.entries(obj).reduce((acc, [k, v]) => { const key = prefix ? prefix + '.' + k : k; return v && typeof v === 'object' && !Array.isArray(v) ? { ...acc, ...module.exports.flatten(v, key) } : { ...acc, [key]: v }; }, {}),
};