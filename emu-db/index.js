
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

const fs = require('fs');
class DB {
  constructor(file = 'db.json') { this.file = file; this._data = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file,'utf8')) : {}; }
  get(key) { return this._data[key]; }
  set(key, value) { this._data[key] = value; this._save(); return this; }
  del(key) { delete this._data[key]; this._save(); return this; }
  has(key) { return key in this._data; }
  keys() { return Object.keys(this._data); }
  all() { return { ...this._data }; }
  _save() { fs.writeFileSync(this.file, JSON.stringify(this._data, null, 2)); }
}
module.exports = { DB };