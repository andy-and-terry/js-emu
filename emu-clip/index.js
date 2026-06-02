#!/usr/bin/env node
#!/usr/bin/env node
const { execSync } = require('child_process'), [,, cmd, ...rest] = process.argv;
const isWin = process.platform === 'win32', isMac = process.platform === 'darwin';
if (cmd === 'copy') { const text = rest.join(' '); if (isWin) execSync('echo ' + text + ' | clip'); else if (isMac) execSync('echo "' + text + '" | pbcopy'); else execSync('echo "' + text + '" | xclip -selection clipboard'); console.log('Copied!'); }
else { const out = isWin ? execSync('powershell Get-Clipboard') : isMac ? execSync('pbpaste') : execSync('xclip -selection clipboard -o'); console.log(out.toString().trim()); }