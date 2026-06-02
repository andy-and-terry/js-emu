#!/usr/bin/env node
#!/usr/bin/env node
const { randomUUID } = require('crypto');
const count = +(process.argv[2] || 1);
for (let i = 0; i < count; i++) console.log(randomUUID());