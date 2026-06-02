#!/usr/bin/env node
#!/usr/bin/env node
const { execSync } = require('child_process'), host = process.argv[2];
if (!host) { console.error('Usage: emu-ping <host>'); process.exit(1); }
try { const out = execSync('ping -c 4 ' + host, { encoding: 'utf8' }); console.log(out); } catch(e) { console.error('Ping failed'); }