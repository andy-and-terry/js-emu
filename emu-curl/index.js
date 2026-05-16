#!/usr/bin/env node
#!/usr/bin/env node
const https = require('https'), http = require('http'), [,, url, method = 'GET'] = process.argv;
if (!url) { console.error('Usage: emu-curl <url> [method]'); process.exit(1); }
const mod = url.startsWith('https') ? https : http;
mod.get(url, res => { let d = ''; res.on('data', c => d += c); res.on('end', () => console.log(d)); });