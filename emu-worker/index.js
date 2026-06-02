
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
class WorkerPool {
  constructor(size = 4) { this._size = size; this._queue = []; this._active = 0; }
  run(fn, data) {
    return new Promise((resolve, reject) => {
      const code = `const { parentPort, workerData } = require('worker_threads'); Promise.resolve((${fn.toString()})(workerData)).then(r => parentPort.postMessage({ result: r })).catch(e => parentPort.postMessage({ error: e.message }));`;
      const worker = new Worker(code, { eval: true, workerData: data });
      worker.on('message', m => m.error ? reject(new Error(m.error)) : resolve(m.result));
      worker.on('error', reject);
    });
  }
}
module.exports = { WorkerPool };