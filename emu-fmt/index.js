#!/usr/bin/env node
#!/usr/bin/env node
const { execSync } = require('child_process'), target = process.argv[2] || '.';
try { execSync('npx prettier --write ' + target, { stdio: 'inherit' }); }
catch(e) { console.error('Install prettier: npm install -g prettier'); }