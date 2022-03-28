const extract = require('extract-zip')
require('dotenv').config()

var fileName = `images.zip`;
var path = process.cwd();
// console.log(path);
// console.log(filePath);
extract(fileName, {
  dir: path
}).then(() => {
  console.log(`successfully extracted`)
})