
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

const crypto = require('crypto');
module.exports = {
  int: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
  float: (min, max) => Math.random() * (max - min) + min,
  bool: () => Math.random() < 0.5,
  pick: arr => arr[Math.floor(Math.random() * arr.length)],
  shuffle: arr => [...arr].sort(() => Math.random() - 0.5),
  string: (len = 12, chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789') => Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join(''),
  hex: (len = 8) => crypto.randomBytes(Math.ceil(len/2)).toString('hex').slice(0, len),
  color: () => '#' + crypto.randomBytes(3).toString('hex'),
};