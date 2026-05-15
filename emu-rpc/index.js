
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

const http = require('http');
class RPCServer {
  constructor() { this._methods = {}; }
  register(name, fn) { this._methods[name] = fn; return this; }
  listen(port, cb) {
    http.createServer(async (req, res) => {
      let body = ''; req.on('data', c => body += c); req.on('end', async () => {
        try {
          const { method, params, id } = JSON.parse(body);
          if (!this._methods[method]) { res.writeHead(404); return res.end(JSON.stringify({ error: 'Method not found', id })); }
          const result = await this._methods[method](...(Array.isArray(params) ? params : [params]));
          res.writeHead(200, { 'Content-Type': 'application/json' }); res.end(JSON.stringify({ result, id }));
        } catch(e) { res.writeHead(500); res.end(JSON.stringify({ error: e.message })); }
      });
    }).listen(port, cb);
  }
}
module.exports = { RPCServer };