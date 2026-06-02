#!/usr/bin/env node
#!/usr/bin/env node
// Requires: npm install qrcode
const text = process.argv.slice(2).join(' ');
if (!text) { console.error('Usage: emu-qr <text>'); process.exit(1); }
try { const qr = require('qrcode'); qr.toString(text, { type: 'terminal' }, (e, s) => console.log(s)); }
catch(e) { console.error('Install qrcode: npm install qrcode'); }