
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

const crypto = require('crypto');
module.exports = {
  generate: (len = 6) => String(crypto.randomInt(0, Math.pow(10, len))).padStart(len, '0'),
  totp: (secret, window = 30) => {
    const counter = Math.floor(Date.now() / 1000 / window);
    const buf = Buffer.alloc(8); buf.writeBigInt64BE(BigInt(counter));
    const hmac = crypto.createHmac('sha1', secret).update(buf).digest();
    const offset = hmac[19] & 0xf;
    return String(((hmac.readUInt32BE(offset) & 0x7fffffff) % 1000000)).padStart(6, '0');
  },
};