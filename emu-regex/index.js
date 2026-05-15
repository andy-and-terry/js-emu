
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/your-username/emu\x1b[0m');
}

module.exports = {
  email: /^[\w.+\-]+@[\w\-]+\.[a-z]{2,}$/i,
  url: /^https?:\/\/[\w\-]+(\.[\w\-]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?$/,
  ipv4: /^(\d{1,3}\.){3}\d{1,3}$/,
  slug: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  phone: /^[+]?[\d\s\-().]{7,15}$/,
  hex: /^#?([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/,
  uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  semver: /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-(\S+))?(?:\+([\S]+))?$/,
  test: (re, s) => re.test(s),
};