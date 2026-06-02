
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

module.exports = {
  format: (d = new Date(), fmt = 'YYYY-MM-DD') => fmt
    .replace('YYYY', d.getFullYear()).replace('MM', String(d.getMonth()+1).padStart(2,'0'))
    .replace('DD', String(d.getDate()).padStart(2,'0')).replace('HH', String(d.getHours()).padStart(2,'0'))
    .replace('mm', String(d.getMinutes()).padStart(2,'0')).replace('ss', String(d.getSeconds()).padStart(2,'0')),
  parse: s => new Date(s),
  add: (d, n, unit) => { const r = new Date(d); if(unit==='day') r.setDate(r.getDate()+n); else if(unit==='month') r.setMonth(r.getMonth()+n); else if(unit==='year') r.setFullYear(r.getFullYear()+n); return r; },
  diff: (a, b, unit = 'day') => { const ms = Math.abs(new Date(b)-new Date(a)); if(unit==='day') return Math.floor(ms/86400000); if(unit==='hour') return Math.floor(ms/3600000); return ms; },
  isToday: d => new Date(d).toDateString() === new Date().toDateString(),
  ago: d => { const s = Math.floor((Date.now()-new Date(d))/1000); if(s<60) return s+'s ago'; if(s<3600) return Math.floor(s/60)+'m ago'; if(s<86400) return Math.floor(s/3600)+'h ago'; return Math.floor(s/86400)+'d ago'; },
};