
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

function parse(v) { const [, major, minor, patch, pre] = v.match(/^v?(\d+)\.(\d+)\.(\d+)(?:-(.+))?$/) || []; return { major: +major, minor: +minor, patch: +patch, pre }; }
function compare(a, b) { const pa = parse(a), pb = parse(b); return pa.major - pb.major || pa.minor - pb.minor || pa.patch - pb.patch; }
module.exports = {
  parse,
  compare,
  gt: (a, b) => compare(a, b) > 0,
  lt: (a, b) => compare(a, b) < 0,
  eq: (a, b) => compare(a, b) === 0,
  inc: (v, part = 'patch') => { const p = parse(v); p[part]++; if (part === 'major') p.minor = p.patch = 0; if (part === 'minor') p.patch = 0; return `${p.major}.${p.minor}.${p.patch}`; },
  valid: v => /^v?(\d+)\.(\d+)\.(\d+)/.test(v),
};