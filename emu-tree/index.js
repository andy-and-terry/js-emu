#!/usr/bin/env node
#!/usr/bin/env node
const fs = require('fs'), path = require('path');
function tree(dir, prefix = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  entries.forEach((e, i) => {
    const isLast = i === entries.length - 1;
    console.log(prefix + (isLast ? '└── ' : '├── ') + e.name);
    if (e.isDirectory()) tree(path.join(dir, e.name), prefix + (isLast ? '    ' : '│   '));
  });
}
const target = process.argv[2] || '.';
console.log(target); tree(target);