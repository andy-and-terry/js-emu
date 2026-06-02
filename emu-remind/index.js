#!/usr/bin/env node
#!/usr/bin/env node
const [,, seconds, ...msg] = process.argv;
if (!seconds || !msg.length) { console.error('Usage: emu-remind <seconds> <message>'); process.exit(1); }
console.log('Reminder set for ' + seconds + 's: ' + msg.join(' '));
setTimeout(() => { console.log('\n🔔 REMINDER: ' + msg.join(' ')); }, +seconds * 1000);