
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

const fs = require('fs'), path = require('path');
module.exports = {
  exists: p => fs.existsSync(p),
  read: (p, enc = 'utf8') => fs.readFileSync(p, enc),
  write: (p, data) => fs.writeFileSync(p, data),
  append: (p, data) => fs.appendFileSync(p, data),
  mkdir: p => fs.mkdirSync(p, { recursive: true }),
  rm: p => fs.rmSync(p, { recursive: true, force: true }),
  copy: (src, dest) => fs.cpSync(src, dest, { recursive: true }),
  move: (src, dest) => fs.renameSync(src, dest),
  size: p => fs.statSync(p).size,
  walk: (dir, cb) => { fs.readdirSync(dir, { withFileTypes: true }).forEach(e => { const p = path.join(dir, e.name); cb(p, e); if (e.isDirectory()) module.exports.walk(p, cb); }); },
  ext: p => path.extname(p),
  basename: p => path.basename(p, path.extname(p)),
};