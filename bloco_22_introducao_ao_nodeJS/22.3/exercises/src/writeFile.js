const fs = require('fs');

function writeFile(filename, content) {
  fs.writeFileSync(`${__dirname}/${filename}`, content);

  return 'ok';
}

module.exports = writeFile;
