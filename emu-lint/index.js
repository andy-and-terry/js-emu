#!/usr/bin/env node
#!/usr/bin/env node
const { execSync } = require('child_process'), fs = require('fs');
if (fs.existsSync('.eslintrc.json') || fs.existsSync('.eslintrc.js')) {
  try { execSync('npx eslint .', { stdio: 'inherit' }); } catch(e) { process.exit(1); }
} else { console.log('No .eslintrc found. Run: npx eslint --init'); }