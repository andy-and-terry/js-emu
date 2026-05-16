
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

module.exports = {
  // Arrays
  chunk: (arr, n) => Array.from({ length: Math.ceil(arr.length/n) }, (_,i) => arr.slice(i*n, i*n+n)),
  unique: arr => [...new Set(arr)],
  flatten: arr => arr.flat(Infinity),
  shuffle: arr => [...arr].sort(() => Math.random() - 0.5),
  groupBy: (arr, key) => arr.reduce((g, item) => { (g[item[key]] = g[item[key]] || []).push(item); return g; }, {}),
  // Strings
  capitalize: s => s.charAt(0).toUpperCase() + s.slice(1),
  truncate: (s, n, end = '...') => s.length > n ? s.slice(0, n) + end : s,
  words: s => s.match(/\S+/g) || [],
  // Objects
  pick: (obj, keys) => Object.fromEntries(keys.map(k => [k, obj[k]])),
  omit: (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k))),
  deepClone: obj => JSON.parse(JSON.stringify(obj)),
  merge: (...objs) => Object.assign({}, ...objs),
};