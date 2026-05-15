
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

class Progress {
  constructor(total, opts = {}) { this.total = total; this.current = 0; this.width = opts.width || 30; this.label = opts.label || ''; }
  update(n) {
    this.current = Math.min(n, this.total);
    const pct = this.current / this.total;
    const filled = Math.round(this.width * pct);
    const bar = '█'.repeat(filled) + '░'.repeat(this.width - filled);
    const pctStr = (pct * 100).toFixed(0).padStart(3) + '%';
    process.stdout.write(`\r${this.label} [${bar}] ${pctStr} ${this.current}/${this.total}`);
    if (this.current >= this.total) process.stdout.write('\n');
  }
  tick() { this.update(this.current + 1); }
}
module.exports = { Progress };