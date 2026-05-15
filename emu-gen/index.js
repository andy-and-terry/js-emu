#!/usr/bin/env node
#!/usr/bin/env node
const fs = require('fs'), path = require('path'), [,, tpl, out] = process.argv;
if (!tpl || !out) { console.error('Usage: emu-gen <template> <output>'); process.exit(1); }
if (!fs.existsSync(tpl)) { console.error('Template not found: ' + tpl); process.exit(1); }
fs.copyFileSync(tpl, out); console.log('Generated: ' + out);