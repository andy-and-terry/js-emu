
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

const crypto = require('crypto');
module.exports = {
  uuid: () => crypto.randomUUID(),
  nanoid: (len = 21) => crypto.randomBytes(len).toString('base64url').slice(0, len),
  short: () => crypto.randomBytes(4).toString('hex'),
  timestamp: () => Date.now().toString(36) + crypto.randomBytes(4).toString('hex'),
  prefixed: prefix => prefix + '_' + crypto.randomBytes(8).toString('hex'),
};