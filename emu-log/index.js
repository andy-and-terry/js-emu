
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

const LEVELS = { debug: 0, info: 1, warn: 2, error: 3 };
class Logger {
  constructor(opts = {}) { this.level = LEVELS[opts.level || 'info']; this.prefix = opts.prefix || ''; }
  _log(level, color, ...args) { if (LEVELS[level] < this.level) return; const ts = new Date().toISOString(); console[level === 'error' ? 'error' : 'log'](`\x1b[${color}m[${ts}] [${level.toUpperCase()}]${this.prefix ? ' ['+this.prefix+']' : ''}\x1b[0m`, ...args); }
  debug(...a) { this._log('debug', 36, ...a); }
  info(...a) { this._log('info', 32, ...a); }
  warn(...a) { this._log('warn', 33, ...a); }
  error(...a) { this._log('error', 31, ...a); }
  child(prefix) { return new Logger({ level: Object.keys(LEVELS)[this.level], prefix }); }
}
module.exports = { Logger, logger: new Logger() };