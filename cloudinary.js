var cloudinary = require('cloudinary').v2;
var fs = require('fs');
const filePath = `images`;
const api = require('./api.js');

// console.log(config);

cloudinary.config({
  cloud_name: api.cloudinary.cloud_name,
  api_key: api.cloudinary.api_key,
  api_secret: api.cloudinary.api_secret
});

// console.log(cloudinary.config());

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