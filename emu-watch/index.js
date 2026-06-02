#!/usr/bin/env node
#!/usr/bin/env node
const fs = require('fs'), { execSync } = require('child_process'), [,, watchPath, ...cmd] = process.argv;
if (!watchPath || !cmd.length) { console.error('Usage: emu-watch <path> <command>'); process.exit(1); }
console.log('Watching: ' + watchPath);
fs.watch(watchPath, { recursive: true }, (evt, f) => { console.log('[changed] ' + f); try { execSync(cmd.join(' '), { stdio: 'inherit' }); } catch(e) {} });