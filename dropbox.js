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

  var folderPath = `/Sam Khieu’s files/Shared/Design/2023/Promotions/07 July/072323 Recess Ready 20% Off Select Styles/04 Handoff/Site/`;
  // var folderPath = `/Sam Khieu’s files/Shared/Design/2023/Site/071123 Fall 1 HP/handoff/03 paris carousel/`;
  // var folderPath = `/Sam Khieu’s files/Shared/Design/2023/Campaign/021323 Spread The Love Giveaway/04 Handoff/`
  folderPath = folderPath.toLowerCase();
  // console.log(folderPath);

  var writeFilePath = `Site/0723/`;
  // var writeFilePath = `handoff/hp/0714/`;
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
  })
    .then(function (response) {
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
    })
    .catch(function (error) {
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