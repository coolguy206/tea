
var fs = require('fs');
const util = require('util');
const writeFileContent = util.promisify(fs.writeFile);
const mkDir = util.promisify(fs.mkdir);

//!NEEDS ENDING SLASH
var readFilePath = `handoff/landing-pages/dresses/handoff/`;

fs.readdir(`${readFilePath}`, (err, files) => {
    //   console.log(files);
    files.map((file, i) => {
        // console.log(file);
        var newName = file.split('.');
        newName = `${newName[0]}-v2.${newName[1]}`;
        // console.log(newName);

        fs.rename(readFilePath + file, readFilePath + newName, (err) => {
            if(err){
                console.log(`oops something went wrong`);
                console.log(err);
            } else {
                console.log(`${file} renamed to ${newName}`);
            }
        
        });

    });

});


