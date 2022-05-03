var Client = require('ftp');
var fs = require('fs');
require('dotenv').config()

var baseURL = `/media/tea_collection/`;
var category = `promos/one-offs/2022/0427/images/v0/`;
// var category = `homepage/2022/0401/v0/`;
// var category = `landing-pages/newborn/2022/0408/v0/`;
var url = `${baseURL}${category}`
var readFilePath = `Site/`;
var writeFilePath = `promos/default/dev/images/`;

// console.log(url)
console.log(process.env.FTP_HOST, process.env.FTP_USER, process.env.FTP_PASSWORD);

var c = new Client();
c.on('ready', function() {
  /*
    //UPLOAD FILE TO DIRECTORY
    fs.readdir(`${readFilePath}`, (err, files) => {
      if (err) throw err;
      // console.log("\nCurrent directory filenames:");
      files.forEach(file => {
        // console.log(`${readFilePath}${file}`);
        // console.log(`${url}${file}`)

        //upload the file
        c.put(`${readFilePath}${file}`, `${url}${file}`, (err) => {
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
          fs.writeFile(`${writeFilePath}/${name}.html`, html, (err) => {
            if (err) throw err;
            console.log(`File written successfully. ${name}.html`);
          });
          c.end();
        });

      });
    })
  */
  //MAKE DIRECTORY THEN UPLOAD FILES AND MAKE HTML FILES

  c.mkdir(url, true, (err) => {
    if (err) throw err;
    console.log(`successfully made dir: ${url}`);
    //read the files on local machine
    fs.readdir(`${readFilePath}`, (err, files) => {
      if (err) throw err;
      // console.log("\nCurrent directory filenames:");
      files.forEach(file => {
        // console.log(`${readFilePath}${file}`);
        // console.log(`${url}${file}`)

        //upload the file
        c.put(`${readFilePath}${file}`, `${url}${file}`, (err) => {
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
          fs.writeFile(`${writeFilePath}/${name}.html`, html, (err) => {
            if (err) throw err;
            console.log(`File written successfully. ${name}.html`);
          });
          c.end();
        });

      });
    })
    // c.end();
  });


  //GET LIST OF FILES THEN COMPILE HTML FILES
  /*
    c.list(url, function(err, list) {
      if (err) throw err;
      list.map((val, i) => {

        console.log(val);
        var name = val.name.split('.')[0];
        var html = ``;
        if (name.indexOf(`-`) !== -1) {
          // console.log(name);
          if (name.indexOf(`d`) !== -1) {
            html = `<img class="desktop" data-src="/mas_assets${url}${val.name}">`;
          } else if (name.indexOf(`m`) !== -1) {
            html = `<img class="mobile" data-src="/mas_assets${url}${val.name}">`;
          } else {
            html = `<img data-src="/mas_assets${url}${val.name}">`;
          }
        } else {
          html = `<img data-src="/mas_assets${url}${val.name}">`;
        }

        //make the html file
        fs.writeFile(`${filePath}/output/${name}.html`, html, (err) => {
          if (err) throw err;
          console.log(`File written successfully. ${name}.html`);
        });

      })

      c.end();
    });
  */

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
  host: process.env.FTP_HOST,
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD
});