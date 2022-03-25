var cloudinary = require('cloudinary').v2;
var fs = require('fs');
const filePath = `images`;
require('dotenv').config()

// console.log(process.env.CLOUDINARY_CLOUD_NAME, process.env.CLOUDINARY_API_KEY, process.env.CLOUDINARY_API_SECRECT);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRECT
});

// console.log(cloudinary.config());
/*
fs.readdir(`${filePath}/src`, (err, files) => {
  // console.log(files);

  files.forEach(file => {
    // console.log(file);
    var name = file.split('.')[0];
    console.log(name);

    cloudinary.uploader.upload(`${filePath}/src/${file}`, {
        folder: filePath,
        use_filename: true,
        unique_filename: false
      },
      function(error, result) {
        console.log(result);
        if (result.resource_type == 'image') {
          var html = `<img src="${result.secure_url}">`;
          fs.writeFile(`${filePath}/output/${name}.html`, html, {
            flag: 'wx'
          }, (err) => {
            if (err)
              console.log(err);
            else {
              console.log(`File written successfully. ${name}.html`);
            }
          });
        }
      });

  });
});
*/