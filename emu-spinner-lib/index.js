
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

const SPINNERS = { dots: ['⠋','⠙','⠹','⠸','⠼','⠴','⠦','⠧','⠇','⠏'], line: ['/','−','\\','|'], arrow: ['←','↖','↑','↗','→','↘','↓','↙'] };
class Spinner {
  constructor(opts = {}) { this.frames = SPINNERS[opts.style || 'dots']; this.label = opts.label || ''; this._i = 0; }
  start(label) { if (label) this.label = label; this._iv = setInterval(() => process.stdout.write(`\r${this.frames[this._i++ % this.frames.length]} ${this.label}`), 80); return this; }
  stop(msg = '') { clearInterval(this._iv); process.stdout.write('\r' + (msg || ' '.repeat(this.label.length + 4)) + '\n'); }
  succeed(msg) { this.stop('✓ ' + (msg || this.label)); }
  fail(msg) { this.stop('✗ ' + (msg || this.label)); }
}
module.exports = { Spinner, SPINNERS };