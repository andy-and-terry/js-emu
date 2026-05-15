
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

const EMOJIS = { smile:'😊', heart:'❤️', fire:'🔥', star:'⭐', check:'✅', cross:'❌', warn:'⚠️', info:'ℹ️', rocket:'🚀', bug:'🐛', lock:'🔒', key:'🔑', folder:'📁', file:'📄', clock:'🕐', pin:'📌', bell:'🔔', trash:'🗑️', link:'🔗', search:'🔍' };
module.exports = {
  get: name => EMOJIS[name] || '❓',
  list: () => EMOJIS,
  search: q => Object.entries(EMOJIS).filter(([k]) => k.includes(q)).map(([k,v]) => ({ name: k, emoji: v })),
  strip: s => s.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '').trim(),
};