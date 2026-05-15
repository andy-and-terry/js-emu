
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

class EventEmitter {
  constructor() { this._events = {}; }
  on(e, fn) { (this._events[e] = this._events[e] || []).push(fn); return this; }
  once(e, fn) { const w = (...a) => { fn(...a); this.off(e, w); }; return this.on(e, w); }
  off(e, fn) { this._events[e] = (this._events[e] || []).filter(f => f !== fn); return this; }
  emit(e, ...args) { (this._events[e] || []).forEach(fn => fn(...args)); return this; }
  listeners(e) { return this._events[e] || []; }
  removeAllListeners(e) { if (e) delete this._events[e]; else this._events = {}; return this; }
}
module.exports = { EventEmitter };