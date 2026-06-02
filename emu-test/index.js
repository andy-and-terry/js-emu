#!/usr/bin/env node
#!/usr/bin/env node
const fs = require('fs'), path = require('path');
let pass = 0, fail = 0;
global.test = (name, fn) => { try { fn(); console.log('  ✓ ' + name); pass++; } catch(e) { console.error('  ✗ ' + name + ': ' + e.message); fail++; } };
global.assert = { equal: (a,b) => { if(a!==b) throw new Error(a + ' !== ' + b); }, ok: v => { if(!v) throw new Error('Expected truthy'); } };
const files = fs.readdirSync('.').filter(f => f.endsWith('.test.js'));
if (!files.length) { console.log('No *.test.js files found.'); process.exit(0); }
files.forEach(f => { console.log('\n' + f); require(path.resolve(f)); });
console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);