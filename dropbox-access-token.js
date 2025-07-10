
const fs = require('fs');
const util = require('util');
const readFileContent = util.promisify(fs.readFile)
require('dotenv').config()

module.exports = {

  refreshAccessToken: (callback) => {
    //REFRESH ACCESS TOKEN
    fetch(`https://api.dropboxapi.com/oauth2/token?client_id=${process.env.TEA_DROPBOX_KEY}&client_secret=${process.env.TEA_DROPBOX_SECRET}&grant_type=refresh_token&refresh_token=${process.env.TEA_DROPBOX_REFRESH_TOKEN}`, {
      method: 'post',
    }).then((res) => {

      let data = res.json();
      // console.log(data);
      return data;

    }).then((data) => {

      //NEW ACCESS TOKEN RETURNED
      // console.log(data.access_token);
      let access_token = data.access_token;
      return access_token;

    }).then((access_token) => {

      //READ .ENV FILE & UPDATE TEA_DROPBOX_TOKEN
      readFileContent('.env', 'utf8').then((data) => {

        //CHANGE .ENV FILE CONTENT TO ARRAY
        // console.log(data);
        let arr = data.split('\n');
        // console.log(arr);

        //FIND TEA_DROPBOX_TOKEN
        for (i = 0; i < arr.length; i++) {
          if (arr[i].indexOf('TEA_DROPBOX_TOKEN') !== -1) {

            //REPLACE OLD TOKEN WITH NEW TOKEN
            // console.log(arr[i]);
            let obj = arr[i].split('=');
            // console.log(obj);
            obj[1] = `"${access_token}"`;
            // console.log(obj);
            obj = obj.join('=');
            // console.log(obj);
            arr[i] = obj;
          }
        }

        //CONVERT CONTENT ARRAY BACK TO STRING
        // console.log(arr);
        let content = arr.join('\n');
        // console.log(content);
        let what = [content, access_token];
        // console.log(what);
        return [content, access_token]

      }).then((data) => {
        let content = data[0];
        let access_token = data[1];
        // console.log(`this is content:\n ${content}`);
        // console.log(`this is access token:\n ${access_token}`);

        //WRITE NEW CONTENT TO .ENV FILE & PASS ACCESS TOKEN TO CALLBACK
        fs.writeFile(`.env`, content, (err) => {
          if (err) throw err;
          console.log(`\nsuccessfully updated File .env\n`);
          // console.log(content);
          callback(access_token);
        });

      });
    }).catch((err) => {
      console.log(err);
    });
  }
};