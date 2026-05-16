
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

module.exports = {
  isIPv4: s => /^(\d{1,3}\.){3}\d{1,3}$/.test(s) && s.split('.').every(n => +n >= 0 && +n <= 255),
  isIPv6: s => /^([0-9a-fA-F]{0,4}:){2,7}[0-9a-fA-F]{0,4}$/.test(s),
  isPrivate: s => /^(10\.|172\.(1[6-9]|2\d|3[01])\.|192\.168\.)/.test(s),
  isLoopback: s => s === '127.0.0.1' || s === '::1',
  toInt: s => s.split('.').reduce((a, b) => (a << 8) + +b, 0) >>> 0,
  fromInt: n => [(n>>>24), (n>>>16)&255, (n>>>8)&255, n&255].join('.'),
};