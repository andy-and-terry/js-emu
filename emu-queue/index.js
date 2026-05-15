
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

class Queue {
  constructor(opts = {}) { this.concurrency = opts.concurrency || 1; this._queue = []; this._running = 0; }
  add(fn) { return new Promise((resolve, reject) => { this._queue.push({ fn, resolve, reject }); this._tick(); }); }
  _tick() { while (this._running < this.concurrency && this._queue.length) { const { fn, resolve, reject } = this._queue.shift(); this._running++; Promise.resolve().then(fn).then(r => { this._running--; resolve(r); this._tick(); }).catch(e => { this._running--; reject(e); this._tick(); }); } }
  get size() { return this._queue.length; }
  get pending() { return this._running; }
}
module.exports = { Queue };