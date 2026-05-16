#!/usr/bin/env node
#!/usr/bin/env node
const http = require('http'), fs = require('fs'), path = require('path');
const port = process.argv[2] || 3000, dir = process.argv[3] || '.';
http.createServer((req, res) => {
  let file = path.join(dir, req.url === '/' ? 'index.html' : req.url);
  if (!fs.existsSync(file)) { res.writeHead(404); return res.end('Not found'); }
  res.writeHead(200); fs.createReadStream(file).pipe(res);
}).listen(port, () => console.log('Serving ' + dir + ' on http://localhost:' + port));