
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

module.exports = {
  onExit: fn => { process.on('exit', fn); process.on('SIGINT', () => { fn(); process.exit(0); }); process.on('SIGTERM', () => { fn(); process.exit(0); }); },
  onError: fn => { process.on('uncaughtException', fn); process.on('unhandledRejection', fn); },
  graceful: (cleanup, timeout = 5000) => {
    ['SIGINT','SIGTERM'].forEach(sig => process.on(sig, async () => {
      console.log('\nShutting down...'); const t = setTimeout(() => process.exit(1), timeout);
      try { await cleanup(); clearTimeout(t); process.exit(0); } catch { process.exit(1); }
    }));
  },
};