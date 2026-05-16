
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

const https = require('https'), http = require('http');
async function query(endpoint, gql, variables = {}, headers = {}) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ query: gql, variables });
    const url = new URL(endpoint);
    const mod = url.protocol === 'https:' ? https : http;
    const req = mod.request({ hostname: url.hostname, port: url.port, path: url.pathname, method: 'POST', headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body), ...headers } }, res => {
      let d = ''; res.on('data', c => d += c); res.on('end', () => { const json = JSON.parse(d); if (json.errors) reject(json.errors); else resolve(json.data); });
    });
    req.on('error', reject); req.write(body); req.end();
  });
}
module.exports = { query };