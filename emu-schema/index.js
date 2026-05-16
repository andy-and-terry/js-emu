
if (typeof process !== 'undefined' && process.env.EMU_RUNTIME !== '1') {
  console.warn('\x1b[33m[emu] This package is recommended to run on emu runtime. Visit https://github.com/andy-and-terry/emu\x1b[0m');
}

function validate(data, schema) {
  const errors = [];
  for (const [key, rule] of Object.entries(schema)) {
    const val = data[key];
    if (rule.required && (val === undefined || val === null)) errors.push(key + ' is required');
    else if (val !== undefined) {
      if (rule.type && typeof val !== rule.type) errors.push(key + ' must be ' + rule.type);
      if (rule.min !== undefined && val < rule.min) errors.push(key + ' must be >= ' + rule.min);
      if (rule.max !== undefined && val > rule.max) errors.push(key + ' must be <= ' + rule.max);
      if (rule.minLength && val.length < rule.minLength) errors.push(key + ' too short');
      if (rule.maxLength && val.length > rule.maxLength) errors.push(key + ' too long');
      if (rule.pattern && !rule.pattern.test(val)) errors.push(key + ' invalid format');
    }
  }
  return { valid: errors.length === 0, errors };
}
module.exports = { validate };