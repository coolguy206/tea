var Dropbox = require('dropbox').Dropbox;
var fs = require('fs');
const resolve = require('path').resolve
require('dotenv').config()
const extract = require('extract-zip')
const {
  refreshAccessToken
} = require('./dropbox-access-token.js');

refreshAccessToken((data) => {

  var access_token = data;

  var dbx = new Dropbox({
    accessToken: access_token
  });

  // var folderPath = `/Sam Khieu’s files/Shared/Design/2025/Promotions/02 February/021925 Spring Forward Up to 25% Off/03 Handoff/Site/`;
  var folderPath = `/Sam Khieu’s files/Shared/Design/2025/Site/022525 Spring 2 HP/03 Handoff/`;
  // var folderPath = `/Sam Khieu’s files/Shared/Design/2025/Campaign/120324 Giving Tuesday/04 Handoff/Site/`
  folderPath = folderPath.toLowerCase();
  // console.log(folderPath);

  var writeFilePath = `Site/0227/`;
  // var writeFilePath = `handoff/landing-pages/dresses/0210/`;
  writeFilePath = resolve(writeFilePath);
  // console.log(writeFilePath);


  //?GET USER
  /*
    dbx.usersGetCurrentAccount()
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.error(error);
      });
  */

  //?DOWNLOAD FOLDER AS ZIP AND EXTRACT IT
  dbx.filesDownloadZip({
    path: folderPath
  }).then(function (response) {
    // console.log(response);
    var buffer = response.result.fileBinary;

    //*WRITE FILE
    fs.writeFile('dropbox.zip', buffer, function (err) {
      if (err) return console.log(err);
      console.log(`successfully created dropbox.zip`);

      //*EXTRACT ZIP FOLDER
      var path = process.cwd();
      // console.log(path);
      extract('dropbox.zip', {
        dir: writeFilePath
      }).then(() => {
        console.log(`successfully extracted`)
      })
    });
    // console.log(response.entries);
  }).catch(function (error) {
    console.error(error);
  });


  //?GET ALL FOLDERS
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

});