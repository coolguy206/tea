var Client = require('ftp');
var fs = require('fs');

var baseURL = `/media/tea_collection/`;
var category = `homepage/2022/0317/v0/`;
var url = `${baseURL}${category}`
var filePath = `homepage/default/dev/images/`;

// console.log(url);

var c = new Client();
c.on('ready', function() {

  //MAKE DIRECTORY
  // c.mkdir(url, true, (err) => {
  //   if (err) throw err;
  //   console.log(`successfully made dir: ${url}`);
  //   c.end();
  // });

  //UPLOAD FILES AND MAKE HTML FILES
  fs.readdir(`${filePath}src`, (err, files) => {
    if (err) throw err;
    // console.log("\nCurrent directory filenames:");
    files.forEach(file => {
      // console.log(file);
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

        fs.writeFile(`${filePath}/output/${name}.html`, html, (err) => {
          if (err) throw err;
          console.log(`File written successfully. ${name}.html`);
        });
        c.end();
      });
    });
  })

  //LIST DIRECTORIES
  // c.list(url, function(err, list) {
  //   if (err) throw err;
  //   list.map((val, i) => {
  //     if (val.type == 'd') {
  //       console.log(val);
  //     }
  //   })
  //   // console.dir(list);
  //   c.end();
  // });

});
//CONNECT FTP
c.connect({
  host: `aws.ftp.teacollection.com`,
  user: `tea@make-a-store`,
  password: `muRzUh.2AWBZU`
});