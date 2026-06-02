
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

class Cache {
  constructor(opts = {}) { this._store = new Map(); this._ttl = opts.ttl || 0; }
  set(k, v, ttl = this._ttl) { const exp = ttl ? Date.now() + ttl * 1000 : 0; this._store.set(k, { v, exp }); }
  get(k) { const e = this._store.get(k); if (!e) return undefined; if (e.exp && Date.now() > e.exp) { this._store.delete(k); return undefined; } return e.v; }
  has(k) { return this.get(k) !== undefined; }
  del(k) { this._store.delete(k); }
  clear() { this._store.clear(); }
  get size() { return this._store.size; }
}
module.exports = { Cache };