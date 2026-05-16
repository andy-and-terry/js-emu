#!/usr/bin/env node
#!/usr/bin/env node
const expr = process.argv.slice(2).join(' ');
if (!expr) { console.error('Usage: emu-calc <expression>  e.g. emu-calc 2 + 2'); process.exit(1); }
try { console.log(Function('"use strict"; return (' + expr + ')')()) } catch(e) { console.error('Invalid expression'); }