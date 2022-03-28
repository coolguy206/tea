var Dropbox = require('dropbox').Dropbox;
var fs = require('fs');
require('dotenv').config()
const extract = require('extract-zip')

var dbx = new Dropbox({
  accessToken: process.env.TEA_DROPBOX_TOKEN
});

var folderPath = `/sam khieu’s files/shared/design/2022/promotions/03 march/033122 25% off dressy styles/04 handoff/site/`;

// console.log(dbx.filesDownloadZip);
// console.log(process.env.DROPBOX_TOKEN);

//GET USER
/*
dbx.usersGetCurrentAccount()
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.error(error);
  });
  */

//DOWNLOAD FOLDER AS ZIP AND EXTRACT IT

dbx.filesDownloadZip({
    path: folderPath
  })
  .then(function(response) {
    // console.log(response);
    var buffer = response.result.fileBinary;
    //WRITE FILE
    fs.writeFile('dropbox.zip', buffer, function(err) {
      if (err) return console.log(err);
      console.log(`successfully created dropbox.zip`);

      //EXTRACT ZIP FOLDER
      var path = process.cwd();
      // console.log(path);
      extract('dropbox.zip', {
        dir: path
      }).then(() => {
        console.log(`successfully extracted`)
      })
    });
    // console.log(response.entries);
  })
  .catch(function(error) {
    console.error(error);
  });


//GET ALL FOLDERS
/*
dbx.filesListFolder({
    // path: ''
    path: folderPath
  })
  .then(function(response) {
    console.log(response.result.entries);
    // console.log(response.entries);
  })
  .catch(function(error) {
    console.error(error);
  });
  */