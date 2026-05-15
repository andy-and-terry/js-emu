#!/usr/bin/env node
#!/usr/bin/env node
const fs = require('fs'), path = require('path'), [src, dest] = process.argv.slice(2);
if (!src || !dest) { console.error('Usage: emu-cp <src> <dest>'); process.exit(1); }
fs.cpSync(src, dest, { recursive: true });
console.log('Copied: ' + src + ' -> ' + dest);