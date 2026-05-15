
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

const AdmZip = require('adm-zip');
module.exports = {
  zip: (files, output) => { const z = new AdmZip(); files.forEach(f => z.addLocalFile(f)); z.writeZip(output); },
  unzip: (file, dest = '.') => { new AdmZip(file).extractAllTo(dest, true); },
  list: (file) => new AdmZip(file).getEntries().map(e => e.entryName),
  read: (file, entry) => new AdmZip(file).readAsText(entry),
};