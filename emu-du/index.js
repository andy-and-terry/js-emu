#!/usr/bin/env node
#!/usr/bin/env node
const fs = require('fs'), path = require('path');
function size(p) { const s = fs.statSync(p); if (s.isDirectory()) return fs.readdirSync(p).reduce((a,f) => a + size(path.join(p,f)), 0); return s.size; }
const dir = process.argv[2] || '.';
fs.readdirSync(dir).map(f => ({ f, s: size(path.join(dir,f)) })).sort((a,b) => b.s-a.s).forEach(({f,s}) => console.log((s/1024).toFixed(1).padStart(8) + ' KB  ' + f));