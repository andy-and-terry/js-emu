
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

function parse(xml) {
  const stack = [], root = { children: [] }; let current = root;
  xml.replace(/<([^\/!>][^>]*)>|<\/([^>]+)>|([^<]+)/g, (_, open, close, text) => {
    if (open) { const tag = { tag: open.trim().split(' ')[0], attrs: {}, children: [], parent: current }; current.children.push(tag); stack.push(current); current = tag; }
    else if (close) { current = stack.pop(); }
    else if (text.trim()) { current.children.push(text.trim()); }
  });
  return root.children[0];
}
module.exports = { parse };