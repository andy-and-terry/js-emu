
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

class Middleware {
  constructor() { this._fns = []; }
  use(fn) { this._fns.push(fn); return this; }
  run(ctx) {
    let i = 0;
    const next = () => { const fn = this._fns[i++]; if (fn) return fn(ctx, next); };
    return next();
  }
}
module.exports = { Middleware };