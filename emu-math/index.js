
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

module.exports = {
  clamp: (n, min, max) => Math.min(Math.max(n, min), max),
  lerp: (a, b, t) => a + (b - a) * t,
  map: (n, a, b, c, d) => ((n - a) / (b - a)) * (d - c) + c,
  gcd: (a, b) => b === 0 ? a : module.exports.gcd(b, a % b),
  lcm: (a, b) => (a * b) / module.exports.gcd(a, b),
  factorial: n => n <= 1 ? 1 : n * module.exports.factorial(n - 1),
  isPrime: n => { if (n < 2) return false; for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false; return true; },
  range: (a, b, step = 1) => Array.from({ length: Math.ceil((b-a)/step) }, (_,i) => a + i * step),
  sum: arr => arr.reduce((a, b) => a + b, 0),
  mean: arr => module.exports.sum(arr) / arr.length,
  median: arr => { const s = [...arr].sort((a,b)=>a-b); const m = Math.floor(s.length/2); return s.length%2 ? s[m] : (s[m-1]+s[m])/2; },
};