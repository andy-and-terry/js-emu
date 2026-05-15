
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

const os = require('os');
module.exports = {
  platform: () => os.platform(),
  arch: () => os.arch(),
  hostname: () => os.hostname(),
  home: () => os.homedir(),
  tmpdir: () => os.tmpdir(),
  cpus: () => os.cpus().length,
  memory: () => ({ total: os.totalmem(), free: os.freemem(), used: os.totalmem() - os.freemem() }),
  memoryMB: () => ({ total: Math.round(os.totalmem()/1e6), free: Math.round(os.freemem()/1e6) }),
  uptime: () => os.uptime(),
  network: () => os.networkInterfaces(),
};