
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

module.exports = {
  toText: md => md
    .replace(/^#{1,6}\s+(.+)/gm, (_, t) => '\x1b[1m' + t + '\x1b[0m')
    .replace(/\*\*(.+?)\*\*/g, '\x1b[1m$1\x1b[0m')
    .replace(/\*(.+?)\*/g, '\x1b[3m$1\x1b[0m')
    .replace(/`(.+?)`/g, '\x1b[36m$1\x1b[0m')
    .replace(/^[-*]\s/gm, '  • ')
    .replace(/^>\s(.+)/gm, '  │ $1'),
  strip: md => md.replace(/[#*`>_~\[\]]/g, '').replace(/!?\[.+?\]\(.+?\)/g, ''),
};