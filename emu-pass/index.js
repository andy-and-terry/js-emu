#!/usr/bin/env node
#!/usr/bin/env node
const len = +(process.argv[2] || 16);
const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
let pass = ''; for (let i = 0; i < len; i++) pass += chars[Math.floor(Math.random()*chars.length)];
console.log(pass);