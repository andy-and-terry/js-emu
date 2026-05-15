#!/usr/bin/env node
#!/usr/bin/env node
const fs = require('fs'), [src, dest] = process.argv.slice(2);
if (!src || !dest) { console.error('Usage: emu-mv <src> <dest>'); process.exit(1); }
if (fs.existsSync(dest)) { console.error('Destination exists: ' + dest + '. Use -f to force.'); process.exit(1); }
fs.renameSync(src, dest); console.log('Moved: ' + src + ' -> ' + dest);