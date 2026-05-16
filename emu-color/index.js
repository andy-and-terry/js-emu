
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

const c = (code, reset = 0) => s => `\x1b[${code}m${s}\x1b[${reset}m`;
module.exports = {
  red: c(31), green: c(32), yellow: c(33), blue: c(34), magenta: c(35), cyan: c(36), white: c(37),
  bold: c(1, 22), dim: c(2, 22), italic: c(3, 23), underline: c(4, 24), strikethrough: c(9, 29),
  bgRed: c(41), bgGreen: c(42), bgYellow: c(43), bgBlue: c(44),
  strip: s => s.replace(/\x1b\[[0-9;]*m/g, ''),
  supports: () => process.stdout.hasColors ? process.stdout.hasColors() : true,
};