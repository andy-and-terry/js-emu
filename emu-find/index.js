#!/usr/bin/env node
#!/usr/bin/env node
const fs = require('fs'), path = require('path'), [,, pattern, dir = '.'] = process.argv;
if (!pattern) { console.error('Usage: emu-find <pattern> [dir]'); process.exit(1); }
const re = new RegExp(pattern, 'i');
function walk(d) { fs.readdirSync(d, { withFileTypes: true }).forEach(e => { const p = path.join(d, e.name); if (re.test(e.name)) console.log(p); if (e.isDirectory()) walk(p); }); }
walk(dir);