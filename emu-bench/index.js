#!/usr/bin/env node
#!/usr/bin/env node
const file = process.argv[2];
if (!file) { console.error('Usage: emu-bench <file.js>\nExport an object of { name: fn }'); process.exit(1); }
const suite = require(require('path').resolve(file));
for (const [name, fn] of Object.entries(suite)) {
  const start = process.hrtime.bigint();
  for (let i = 0; i < 100000; i++) fn();
  const ns = Number(process.hrtime.bigint() - start);
  console.log(name + ': ' + (ns/1e6).toFixed(2) + 'ms for 100k runs');
}