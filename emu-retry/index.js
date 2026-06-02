
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

async function retry(fn, opts = {}) {
  const { times = 3, delay = 1000, factor = 1, onRetry } = opts;
  let lastError;
  for (let i = 0; i < times; i++) {
    try { return await fn(); } catch(e) {
      lastError = e;
      if (i < times - 1) { onRetry?.(e, i + 1); await new Promise(r => setTimeout(r, delay * Math.pow(factor, i))); }
    }
  }
  throw lastError;
}
module.exports = { retry };