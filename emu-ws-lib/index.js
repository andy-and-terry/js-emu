
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

// Requires: npm install ws
module.exports = {
  connect: (url, opts = {}) => {
    const { WebSocket } = require('ws');
    const ws = new WebSocket(url);
    if (opts.onMessage) ws.on('message', d => opts.onMessage(d.toString()));
    if (opts.onOpen) ws.on('open', opts.onOpen);
    if (opts.onClose) ws.on('close', opts.onClose);
    if (opts.onError) ws.on('error', opts.onError);
    return ws;
  },
  createServer: (port, handler) => {
    const { WebSocketServer } = require('ws');
    const wss = new WebSocketServer({ port });
    if (handler) wss.on('connection', handler);
    return wss;
  },
};