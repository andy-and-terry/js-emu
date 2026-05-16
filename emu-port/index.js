#!/usr/bin/env node
#!/usr/bin/env node
const net = require('net'), [,, host, port] = process.argv;
if (!host || !port) { console.error('Usage: emu-port <host> <port>'); process.exit(1); }
const s = net.createConnection(+port, host);
s.on('connect', () => { console.log('OPEN ' + host + ':' + port); s.destroy(); });
s.on('error', () => console.log('CLOSED ' + host + ':' + port));