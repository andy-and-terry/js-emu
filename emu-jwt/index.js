
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

// Re-exports emu-auth JWT helpers as a standalone package
const crypto = require('crypto');
const b64 = s => Buffer.from(s).toString('base64url');
const sign = (payload, secret, expiresIn = 3600) => {
  const p = { ...payload, iat: Math.floor(Date.now()/1000), exp: Math.floor(Date.now()/1000) + expiresIn };
  const h = b64(JSON.stringify({ alg: 'HS256', typ: 'JWT' })), body = b64(JSON.stringify(p));
  const sig = crypto.createHmac('sha256', secret).update(h + '.' + body).digest('base64url');
  return h + '.' + body + '.' + sig;
};
const verify = (token, secret) => {
  const [h, b, sig] = token.split('.');
  if (crypto.createHmac('sha256', secret).update(h + '.' + b).digest('base64url') !== sig) throw new Error('Invalid');
  const p = JSON.parse(Buffer.from(b, 'base64url').toString());
  if (p.exp && Date.now()/1000 > p.exp) throw new Error('Expired');
  return p;
};
module.exports = { sign, verify };