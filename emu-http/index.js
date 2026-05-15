
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

const https = require('https'), http = require('http');
function request(url, opts = {}) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.request(url, { method: opts.method || 'GET', headers: { 'Content-Type': 'application/json', 'User-Agent': 'emu-http/1.0.0', ...opts.headers } }, res => {
      let data = ''; res.on('data', c => data += c); res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data, json: () => JSON.parse(data) }));
    });
    req.on('error', reject);
    if (opts.body) req.write(typeof opts.body === 'string' ? opts.body : JSON.stringify(opts.body));
    req.end();
  });
}
module.exports = { request, get: url => request(url), post: (url, body) => request(url, { method: 'POST', body }), put: (url, body) => request(url, { method: 'PUT', body }), del: url => request(url, { method: 'DELETE' }) };