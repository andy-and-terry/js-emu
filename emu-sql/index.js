
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

// Requires: npm install better-sqlite3
class DB {
  constructor(file = ':memory:') { try { this._db = require('better-sqlite3')(file); } catch { console.error('Install: npm install better-sqlite3'); process.exit(1); } }
  run(sql, params = []) { return this._db.prepare(sql).run(params); }
  get(sql, params = []) { return this._db.prepare(sql).get(params); }
  all(sql, params = []) { return this._db.prepare(sql).all(params); }
  exec(sql) { return this._db.exec(sql); }
  transaction(fn) { return this._db.transaction(fn)(); }
  close() { this._db.close(); }
}
module.exports = { DB };