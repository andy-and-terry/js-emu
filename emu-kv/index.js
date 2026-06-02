
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

const fs = require('fs'), path = require('path');
class KV {
  constructor(dir = '.kv') { this.dir = dir; fs.mkdirSync(dir, { recursive: true }); }
  _path(k) { return path.join(this.dir, encodeURIComponent(k) + '.json'); }
  set(k, v) { fs.writeFileSync(this._path(k), JSON.stringify(v)); }
  get(k) { try { return JSON.parse(fs.readFileSync(this._path(k),'utf8')); } catch { return undefined; } }
  del(k) { try { fs.unlinkSync(this._path(k)); } catch {} }
  has(k) { return fs.existsSync(this._path(k)); }
  keys() { return fs.readdirSync(this.dir).map(f => decodeURIComponent(f.replace('.json',''))); }
}
module.exports = { KV };