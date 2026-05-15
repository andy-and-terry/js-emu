
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

class Router {
  constructor() { this._routes = []; }
  _add(method, path, fn) { this._routes.push({ method, path: new RegExp('^' + path.replace(/:([\w]+)/g, '(?<$1>[^/]+)') + '$'), fn }); return this; }
  get(p, fn) { return this._add('GET', p, fn); }
  post(p, fn) { return this._add('POST', p, fn); }
  put(p, fn) { return this._add('PUT', p, fn); }
  delete(p, fn) { return this._add('DELETE', p, fn); }
  handle(req, res) { const route = this._routes.find(r => r.method === req.method && r.path.test(req.url)); if (route) { req.params = req.url.match(route.path)?.groups || {}; route.fn(req, res); } else { res.writeHead(404); res.end('Not Found'); } }
}
module.exports = { Router };