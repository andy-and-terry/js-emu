#!/usr/bin/env node
#!/usr/bin/env node
const fs = require('fs'), path = require('path'), [,, pattern, replacement, dir = '.'] = process.argv;
if (!pattern || !replacement) { console.error('Usage: emu-rename <pattern> <replacement> [dir]'); process.exit(1); }
const re = new RegExp(pattern);
fs.readdirSync(dir).forEach(f => { if (re.test(f)) { const nf = f.replace(re, replacement); fs.renameSync(path.join(dir, f), path.join(dir, nf)); console.log(f + ' -> ' + nf); } });