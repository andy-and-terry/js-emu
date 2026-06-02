
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

class CLI {
  constructor(name, version = '1.0.0') { this.name = name; this.version = version; this._commands = {}; }
  command(name, desc, fn) { this._commands[name] = { desc, fn }; return this; }
  run(argv = process.argv.slice(2)) {
    const [cmd, ...rest] = argv;
    if (!cmd || cmd === '-help' || cmd === '--help') return this._help();
    if (cmd === '-version' || cmd === '--version') return console.log(this.name + ' ' + this.version);
    const c = this._commands[cmd];
    if (!c) { console.error(this.name + ': unknown command "' + cmd + '"'); process.exit(1); }
    c.fn(rest);
  }
  _help() {
    console.log('\n' + this.name + ' ' + this.version + '\n\nCommands:');
    Object.entries(this._commands).forEach(([n, c]) => console.log('  ' + n.padEnd(16) + c.desc));
  }
}
module.exports = { CLI };