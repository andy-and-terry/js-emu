#!/usr/bin/env node
#!/usr/bin/env node
const fs = require('fs'), file = require('os').homedir() + '/.emu-todo.json';
const load = () => fs.existsSync(file) ? JSON.parse(fs.readFileSync(file,'utf8')) : [];
const save = t => fs.writeFileSync(file, JSON.stringify(t));
const [,, cmd, ...rest] = process.argv, todos = load();
if (cmd === 'add') { todos.push({ text: rest.join(' '), done: false }); save(todos); console.log('Added!'); }
else if (cmd === 'done') { todos[+rest[0]].done = true; save(todos); console.log('Done!'); }
else if (cmd === 'rm') { todos.splice(+rest[0], 1); save(todos); console.log('Removed!'); }
else todos.forEach((t,i) => console.log((t.done ? '[x]' : '[ ]') + ' ' + i + ': ' + t.text));