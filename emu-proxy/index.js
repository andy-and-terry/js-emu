#!/usr/bin/env node
#!/usr/bin/env node
const http = require('http'), [,, fromPort = 8080, toPort = 3000] = process.argv;
http.createServer((req, res) => {
  const opts = { hostname: 'localhost', port: +toPort, path: req.url, method: req.method, headers: req.headers };
  const proxy = http.request(opts, r => { res.writeHead(r.statusCode, r.headers); r.pipe(res); });
  req.pipe(proxy);
}).listen(+fromPort, () => console.log('Proxy :' + fromPort + ' -> :' + toPort));