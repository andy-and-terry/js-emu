#!/usr/bin/env node
#!/usr/bin/env node
const http = require('http'), fs = require('fs'), file = process.argv[2] || 'mock.json';
const data = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file,'utf8')) : {};
const port = 4000;
http.createServer((req, res) => {
  const key = req.url.replace('/','');
  res.writeHead(200, {'Content-Type':'application/json'});
  res.end(JSON.stringify(data[key] || { error: 'not found' }));
}).listen(port, () => console.log('Mock API on http://localhost:' + port));