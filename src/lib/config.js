const path = require('path');

module.exports = {
  read(rawCfgPath) {
    const cfgPath = path.resolve(process.cwd(), rawCfgPath);
    return require(cfgPath);
  }
}
