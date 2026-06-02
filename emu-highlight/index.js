
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

const KEYWORDS = /\b(const|let|var|function|return|if|else|for|while|class|new|import|export|from|async|await|try|catch|throw)\b/g;
const STRINGS = /(".*?"|'.*?'|`.*?`)/g;
const COMMENTS = /(//.*$|/\*[\s\S]*?\*/)/gm;
const NUMBERS = /\b(\d+\.?\d*)\b/g;
module.exports = {
  js: code => code
    .replace(COMMENTS, m => `\x1b[2m${m}\x1b[0m`)
    .replace(STRINGS, m => `\x1b[32m${m}\x1b[0m`)
    .replace(KEYWORDS, m => `\x1b[35m${m}\x1b[0m`)
    .replace(NUMBERS, m => `\x1b[33m${m}\x1b[0m`),
};