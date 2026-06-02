
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

module.exports = {
  parse: (argv = process.argv.slice(2), schema = {}) => {
    const result = { _: [] };
    for (let i = 0; i < argv.length; i++) {
      const a = argv[i];
      if (a.startsWith('--')) {
        const [k, v] = a.slice(2).split('=');
        const def = schema[k];
        const val = v !== undefined ? v : (!argv[i+1] || argv[i+1].startsWith('-') ? true : argv[++i]);
        result[k] = def?.type === 'number' ? +val : def?.type === 'boolean' ? val !== 'false' : val;
      } else if (a.startsWith('-') && a.length === 2) {
        const k = Object.keys(schema).find(s => schema[s].alias === a[1]) || a[1];
        result[k] = true;
      } else result._.push(a);
    }
    return result;
  },
};