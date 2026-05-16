#!/usr/bin/env node
#!/usr/bin/env node
const dns = require('dns'), host = process.argv[2];
if (!host) { console.error('Usage: emu-dns <hostname>'); process.exit(1); }
dns.resolve4(host, (e, a) => { if (e) return console.error('Error: ' + e.message); a.forEach(ip => console.log('A  ' + ip)); });
dns.resolveMx(host, (e, r) => { if (!e) r.forEach(m => console.log('MX ' + m.exchange)); });