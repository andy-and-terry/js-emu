#!/usr/bin/env node
#!/usr/bin/env node
const repl = require('repl');
console.log('emu REPL v1.0.0  (Ctrl+C to exit)');
const r = repl.start({ prompt: 'emu> ', useColors: true });
r.context.emu = { version: '1.0.0' };