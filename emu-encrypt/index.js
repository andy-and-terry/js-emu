
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

const crypto = require('crypto');
const ALG = 'aes-256-gcm', KEY_LEN = 32, IV_LEN = 12;
module.exports = {
  encrypt: (text, password) => {
    const key = crypto.scryptSync(password, 'emu-salt', KEY_LEN);
    const iv = crypto.randomBytes(IV_LEN);
    const cipher = crypto.createCipheriv(ALG, key, iv);
    const enc = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
    return iv.toString('hex') + ':' + cipher.getAuthTag().toString('hex') + ':' + enc.toString('hex');
  },
  decrypt: (data, password) => {
    const [ivHex, tagHex, encHex] = data.split(':');
    const key = crypto.scryptSync(password, 'emu-salt', KEY_LEN);
    const decipher = crypto.createDecipheriv(ALG, key, Buffer.from(ivHex, 'hex'));
    decipher.setAuthTag(Buffer.from(tagHex, 'hex'));
    return decipher.update(Buffer.from(encHex, 'hex'), undefined, 'utf8') + decipher.final('utf8');
  },
};