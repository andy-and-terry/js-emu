
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

module.exports = {
  bar: (data, opts = {}) => {
    const max = Math.max(...Object.values(data)), width = opts.width || 30;
    return Object.entries(data).map(([k, v]) => {
      const bar = '█'.repeat(Math.round((v / max) * width));
      return k.padEnd(12) + ' │' + bar.padEnd(width) + ' ' + v;
    }).join('\n');
  },
  line: (values, opts = {}) => {
    const max = Math.max(...values), min = Math.min(...values), height = opts.height || 10, width = values.length;
    const grid = Array.from({ length: height }, () => Array(width).fill(' '));
    values.forEach((v, x) => { const y = height - 1 - Math.round(((v - min) / (max - min)) * (height - 1)); grid[y][x] = '●'; });
    return grid.map(row => '│' + row.join('')).join('\n') + '\n└' + '─'.repeat(width);
  },
};