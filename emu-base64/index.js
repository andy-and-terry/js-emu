
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

module.exports = {
  encode: s => Buffer.from(s).toString('base64'),
  decode: s => Buffer.from(s, 'base64').toString('utf8'),
  encodeUrl: s => Buffer.from(s).toString('base64url'),
  decodeUrl: s => Buffer.from(s, 'base64url').toString('utf8'),
  isValid: s => /^[A-Za-z0-9+/]*={0,2}$/.test(s),
};