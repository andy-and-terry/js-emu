
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

const fs = require('fs');
module.exports = {
  load: (opts = {}) => {
    const { defaults = {}, file, env = true, prefix = '' } = opts;
    let config = { ...defaults };
    if (file && fs.existsSync(file)) {
      try { Object.assign(config, JSON.parse(fs.readFileSync(file, 'utf8'))); } catch {}
    }
    if (env) {
      for (const [k, v] of Object.entries(process.env)) {
        if (!prefix || k.startsWith(prefix)) {
          const key = prefix ? k.slice(prefix.length).toLowerCase() : k.toLowerCase();
          config[key] = v === 'true' ? true : v === 'false' ? false : isNaN(v) ? v : +v;
        }
      }
    }
    return config;
  },
};