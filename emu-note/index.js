#!/usr/bin/env node
#!/usr/bin/env node
const fs = require('fs'), file = require('os').homedir() + '/.emu-notes.json';
const load = () => fs.existsSync(file) ? JSON.parse(fs.readFileSync(file,'utf8')) : [];
const save = n => fs.writeFileSync(file, JSON.stringify(n, null, 2));
const [,, cmd, ...rest] = process.argv, notes = load();
if (cmd === 'add') { notes.push({ text: rest.join(' '), at: new Date().toISOString() }); save(notes); console.log('Note saved!'); }
else if (cmd === 'rm') { notes.splice(+rest[0], 1); save(notes); console.log('Deleted!'); }
else if (!cmd || cmd === 'list') notes.forEach((n,i) => console.log(i + ': ' + n.text + '  (' + n.at.slice(0,10) + ')'));
else console.log('Usage: emu-note add|list|rm');