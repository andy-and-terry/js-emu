
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

function parseArgs(argv = process.argv.slice(2)) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) { const [k, v] = a.slice(2).split('='); args[k] = v !== undefined ? v : (argv[i+1] && !argv[i+1].startsWith('-') ? argv[++i] : true); }
    else if (a.startsWith('-')) { args[a.slice(1)] = true; }
    else args._.push(a);
  }
  return args;
}
module.exports = { parseArgs };