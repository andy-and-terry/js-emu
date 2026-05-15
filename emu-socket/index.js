
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

// Requires: npm install ws
class SocketServer {
  constructor() { this._handlers = {}; this._clients = new Set(); }
  on(event, fn) { this._handlers[event] = fn; return this; }
  emit(client, event, data) { client.send(JSON.stringify({ event, data })); }
  broadcast(event, data, except) { this._clients.forEach(c => { if (c !== except && c.readyState === 1) this.emit(c, event, data); }); }
  listen(port) {
    try {
      const { WebSocketServer } = require('ws');
      const wss = new WebSocketServer({ port });
      wss.on('connection', ws => {
        this._clients.add(ws);
        ws.on('message', raw => { try { const { event, data } = JSON.parse(raw); this._handlers[event]?.(ws, data, this); } catch {} });
        ws.on('close', () => this._clients.delete(ws));
        this._handlers['connect']?.(ws, null, this);
      });
      console.log('Socket server on port ' + port);
    } catch(e) { console.error('Install ws: npm install ws'); }
  }
}
module.exports = { SocketServer };