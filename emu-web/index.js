
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

const http = require('http');
class App {
  constructor() { this._routes = []; this._middleware = []; }
  use(fn) { this._middleware.push(fn); return this; }
  _add(method, path, fn) { this._routes.push({ method, path, fn }); return this; }
  get(p, fn) { return this._add('GET', p, fn); }
  post(p, fn) { return this._add('POST', p, fn); }
  put(p, fn) { return this._add('PUT', p, fn); }
  delete(p, fn) { return this._add('DELETE', p, fn); }
  listen(port, cb) {
    http.createServer((req, res) => {
      res.json = d => { res.writeHead(res.statusCode || 200, {'Content-Type':'application/json'}); res.end(JSON.stringify(d)); };
      res.send = d => { res.writeHead(res.statusCode || 200); res.end(d); };
      let body = ''; req.on('data', c => body += c); req.on('end', () => {
        try { req.body = JSON.parse(body); } catch { req.body = body; }
        const route = this._routes.find(r => r.method === req.method && r.path === req.url);
        const stack = [...this._middleware, route ? route.fn : (q,s) => { s.writeHead(404); s.end('Not Found'); }];
        let i = 0; const next = () => stack[i++]?.(req, res, next);
        next();
      });
    }).listen(port, cb);
  }
}
module.exports = { App };