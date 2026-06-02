#!/usr/bin/env node
#!/usr/bin/env node
// Requires: npm install ws
const url = process.argv[2];
if (!url) { console.error('Usage: emu-ws <ws://url>'); process.exit(1); }
try {
  const WebSocket = require('ws'), ws = new WebSocket(url);
  ws.on('open', () => { console.log('Connected to ' + url); process.stdin.on('data', d => ws.send(d.toString().trim())); });
  ws.on('message', d => console.log('<< ' + d));
  ws.on('error', e => console.error('Error: ' + e.message));
} catch(e) { console.error('Install ws: npm install ws'); }