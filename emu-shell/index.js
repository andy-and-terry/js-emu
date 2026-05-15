
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

const { execSync, spawnSync } = require('child_process');
module.exports = {
  run: (cmd, opts = {}) => { try { return { ok: true, stdout: execSync(cmd, { encoding: 'utf8', ...opts }).trim(), stderr: '' }; } catch(e) { return { ok: false, stdout: '', stderr: e.stderr?.toString() || e.message }; } },
  which: cmd => { try { return execSync('which ' + cmd, { encoding: 'utf8' }).trim(); } catch { return null; } },
  exists: cmd => !!module.exports.which(cmd),
  platform: () => process.platform,
  isWindows: () => process.platform === 'win32',
  isLinux: () => process.platform === 'linux',
  isMac: () => process.platform === 'darwin',
};