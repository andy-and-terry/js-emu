
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

const fs = require('fs');
module.exports = {
  parse: text => JSON.parse(text.replace(/\/\/[^\n]*/g, '').replace(/\/\*[\s\S]*?\*\//g, '')),
  stringify: (obj, indent = 2) => JSON.stringify(obj, null, indent),
  readFile: file => module.exports.parse(fs.readFileSync(file, 'utf8')),
  writeFile: (file, obj, indent = 2) => fs.writeFileSync(file, module.exports.stringify(obj, indent)),
  merge: (...objs) => Object.assign({}, ...objs),
};