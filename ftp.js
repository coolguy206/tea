var Client = require('ftp');
var fs = require('fs');
var api = require('./api.js');

var baseURL = `/media/tea_collection/`;
var category = `homepage/2022/0317/v0/`;
var url = `${baseURL}${category}`
var filePath = `homepage/default/dev/images/`;

// console.log(url);

var c = new Client();
c.on('ready', function() {

  //MAKE DIRECTORY THEN UPLOAD FILES AND MAKE HTML FILES

  c.mkdir(url, true, (err) => {
    if (err) throw err;
    console.log(`successfully made dir: ${url}`);
    //read the files on local machine
    fs.readdir(`${filePath}src`, (err, files) => {
      if (err) throw err;
      // console.log("\nCurrent directory filenames:");
      files.forEach(file => {
        // console.log(file);

        //upload the file
        c.put(`${filePath}src/${file}`, `${url}${file}`, (err) => {
          if (err) throw err;
          console.log(`successfully uploaded file: ${file}`);

          var name = file.split('.')[0];
          var html = ``;
          if (name.indexOf(`-`) !== -1) {
            // console.log(name);
            if (name.indexOf(`d`) !== -1) {
              html = `<img class="desktop" data-src="/mas_assets${url}${file}">`;
            } else if (name.indexOf(`m`) !== -1) {
              html = `<img class="mobile" data-src="/mas_assets${url}${file}">`;
            } else {
              html = `<img data-src="/mas_assets${url}${file}">`;
            }
          } else {
            html = `<img data-src="/mas_assets${url}${file}">`;
          }

          //make the html file
          fs.writeFile(`${filePath}/output/${name}.html`, html, (err) => {
            if (err) throw err;
            console.log(`File written successfully. ${name}.html`);
          });
          c.end();
        });
      });
    })
    // c.end();
  });

  //GET LIST OF FILES THEN DELETE FILES IN DIRECTORY
  /*
  c.list(url, function(err, list) {
    if (err) throw err;
    list.map((val, i) => {
      if (val.type == '-') {
        // console.log(val);

        //DELETE FILES
        c.delete(`${url}${val.name}`, function(err) {
          if (err) throw err;
          console.log(`successfully deleted file: ${url}${val.name}`);
          c.end();
        });
      }
    })
    // console.dir(list);
    // c.end();
  });
  */

  //LIST DIRECTORIES
  /*
  c.list(url, function(err, list) {
    if (err) throw err;
    list.map((val, i) => {
      // if (val.type == 'd') {
      console.log(val);
      // }
    })
    // console.dir(list);
    c.end();
  });
  */
});
//CONNECT FTP
c.connect({
  host: api.ftp.host,
  user: api.ftp.user,
  password: api.ftp.password
});