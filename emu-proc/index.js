
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

const { execSync, spawn } = require('child_process');
module.exports = {
  run: (cmd, opts = {}) => execSync(cmd, { encoding: 'utf8', ...opts }).trim(),
  spawn: (cmd, args, opts = {}) => spawn(cmd, args, { stdio: 'inherit', ...opts }),
  pid: () => process.pid,
  memory: () => process.memoryUsage(),
  uptime: () => process.uptime(),
  exit: (code = 0) => process.exit(code),
  onExit: fn => process.on('exit', fn),
  onSignal: (sig, fn) => process.on(sig, fn),
};