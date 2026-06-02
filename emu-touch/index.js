#!/usr/bin/env node
#!/usr/bin/env node
const fs = require('fs'), path = require('path'), args = process.argv.slice(2);
if (!args.length) { console.error('Usage: emu-touch <file> [file2...]'); process.exit(1); }
args.forEach(f => { fs.closeSync(fs.openSync(f, 'a')); console.log('created: ' + f); });