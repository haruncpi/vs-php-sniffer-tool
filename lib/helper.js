const path = require('path');
const fs = require('fs');

const confFileNames = [
  '.phpcs.xml',
  '.phpcs.xml.dist',
  'phpcs.xml',
  'phpcs.xml.dist',
  'phpcs.ruleset.xml',
  'ruleset.xml',
];

/**
 * @param {string} filePath
 */
function findPhpcsConfig(filePath) {
  let dir = path.dirname(filePath);

  while (dir !== path.parse(dir).root) {
    // eslint-disable-next-line no-restricted-syntax
    for (const confFile of confFileNames) {
      const confPath = path.join(dir, confFile);
      if (fs.existsSync(confPath)) {
        return confPath;
      }
    }

    dir = path.dirname(dir);
  }
  return null;
}

module.exports.findPhpcsConfig = findPhpcsConfig;
