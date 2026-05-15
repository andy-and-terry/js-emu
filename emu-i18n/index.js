
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

class I18n {
  constructor(opts = {}) { this._locale = opts.locale || 'en'; this._messages = opts.messages || {}; this._fallback = opts.fallback || 'en'; }
  t(key, vars = {}) {
    const msg = (this._messages[this._locale]?.[key] || this._messages[this._fallback]?.[key] || key);
    return msg.replace(/\{([\w]+)\}/g, (_, k) => vars[k] ?? '{' + k + '}');
  }
  locale(l) { if (l) { this._locale = l; return this; } return this._locale; }
  add(locale, messages) { this._messages[locale] = { ...this._messages[locale], ...messages }; return this; }
}
module.exports = { I18n };