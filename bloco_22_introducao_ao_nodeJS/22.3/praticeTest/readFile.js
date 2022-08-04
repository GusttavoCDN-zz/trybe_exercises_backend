const fs = require('fs');

function readFile(filename) {
  try {
    const data = fs.readFileSync(filename, 'utf8');
    return data.toString();
  } catch (error) {
    return null;
  }
}

module.exports = readFile;
