
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

const crypto = require('crypto');
const hash = (algo, data, enc = 'hex') => crypto.createHash(algo).update(data).digest(enc);
module.exports = {
  md5: d => hash('md5', d),
  sha1: d => hash('sha1', d),
  sha256: d => hash('sha256', d),
  sha512: d => hash('sha512', d),
  hmac: (data, key, algo = 'sha256') => crypto.createHmac(algo, key).update(data).digest('hex'),
  compare: (a, b) => crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b)),
};