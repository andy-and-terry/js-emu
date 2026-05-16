
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

const fs = require('fs'), path = require('path');
function parse(text) { return Object.fromEntries(text.split('\n').filter(l => l && !l.startsWith('#')).map(l => { const i = l.indexOf('='); return [l.slice(0,i).trim(), l.slice(i+1).trim().replace(/^["']|["']$/g,'')]; })); }
module.exports = {
  config: (file = '.env', opts = {}) => {
    const f = path.resolve(file);
    if (!fs.existsSync(f)) { if (!opts.silent) console.warn('emu-dotenv: ' + file + ' not found'); return {}; }
    const vars = parse(fs.readFileSync(f, 'utf8'));
    if (!opts.override) Object.entries(vars).forEach(([k,v]) => { if (!(k in process.env)) process.env[k] = v; });
    else Object.assign(process.env, vars);
    return vars;
  },
  parse,
};