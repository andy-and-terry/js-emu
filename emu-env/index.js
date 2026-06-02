#!/usr/bin/env node
#!/usr/bin/env node
const fs = require('fs'), file = '.env', [,, cmd, key, val] = process.argv;
const load = () => fs.existsSync(file) ? Object.fromEntries(fs.readFileSync(file,'utf8').split('\n').filter(Boolean).map(l => l.split('='))) : {};
const save = obj => fs.writeFileSync(file, Object.entries(obj).map(([k,v]) => k+'='+v).join('\n'));
if (cmd === 'get') console.log(load()[key] || '');
else if (cmd === 'set') { const e = load(); e[key] = val; save(e); console.log('Set ' + key); }
else if (cmd === 'list') Object.entries(load()).forEach(([k,v]) => console.log(k + '=' + v));
else if (cmd === 'del') { const e = load(); delete e[key]; save(e); console.log('Deleted ' + key); }
else console.log('Usage: emu-env get|set|list|del [key] [value]');