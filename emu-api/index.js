
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

const http = require('http');
class API {
  constructor() { this._routes = {}; }
  route(method, path, handler) { this._routes[method + ':' + path] = handler; return this; }
  get(p, h) { return this.route('GET', p, h); }
  post(p, h) { return this.route('POST', p, h); }
  put(p, h) { return this.route('PUT', p, h); }
  delete(p, h) { return this.route('DELETE', p, h); }
  listen(port, cb) {
    http.createServer((req, res) => {
      let body = ''; req.on('data', c => body += c); req.on('end', async () => {
        try { req.body = body ? JSON.parse(body) : {}; } catch { req.body = {}; }
        const send = (data, status = 200) => { res.writeHead(status, {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}); res.end(JSON.stringify(data)); };
        const handler = this._routes[req.method + ':' + req.url];
        if (handler) { try { const result = await handler(req, res); if (result !== undefined) send(result); } catch(e) { send({ error: e.message }, 500); } }
        else send({ error: 'Not found' }, 404);
      });
    }).listen(port, cb);
  }
}
module.exports = { API };