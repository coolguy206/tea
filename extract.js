const fs = require('fs');
const extract = require('extract-zip')
require('dotenv').config()
var path = require("path");

// var path = process.cwd();
var thePath = `../../../downloads/extract/`;


files = fs.readdirSync(thePath);
console.log("\Filenames with the .zip extension:");
files.forEach(file => {
  if (path.extname(file) == ".zip") {
    // console.log(file);
    var absoluteDirPath = path.resolve(thePath);
    var absoluteFilePath = path.resolve(`${thePath}${file}`);
    // console.log(absoluteFilePath);
    extract(absoluteFilePath, {
      dir: absoluteDirPath
    }).then(() => {
      console.log(`successfully extracted: ${absoluteFilePath}`);
    })
  }
})