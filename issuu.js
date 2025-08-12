const fs = require('fs');
// const md5 = require('md5');
const reOrderIssuu = require('./re-order-issuu.js');
require('dotenv').config()

// console.log(process.env.ISSUU_APIKEY, process.env.ISSUU_SECRET, process.env.ISSUU_TOKEN);
// console.log(reOrderIssuu);

const baseUrl = `https://api.issuu.com/v2/publications`;

var size = `size=`;
var state = `state=PUBLISHED`;

var li = ``;

const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${process.env.ISSUU_TOKEN}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch(`${baseUrl}?${state}`, requestOptions).then((res) => {
  return res.json();
}).then((res) => {

  // console.log(res);
  size = size + res.count;
  // console.log(`${baseUrl}?${size}&${state}`);

  fetch(`${baseUrl}?${size}&${state}`, requestOptions).then((data) => {
    return data.json();
  }).then((data) => {


    // console.log(data.data.results[0]);
    var catalogs = data.results;

    catalogs.map((val, i) => {
      var title = val.title;
      title = title.replace('Tea Collection - ', '');
      title = title.replace(/\(|\)/gi, '');

      // var name = val.fileInfo.name;
      // name = name.replace('.pdf', '');
      // name = name.toLowerCase();

      var name = val.publicLocation;
      name = name.split('docs/')[1];
      // console.log(name);

      var imgUrl = val.cover.large.url;

      li = `${li}\n<li data-name="${name}" data-desc="${val.description}" data-title="${title}"><img src="${imgUrl}" alt="${title}"><h4>${title}</h4></li>\n`;

    });

    fs.writeFile(`landing-page/about/catalogs/dev/li.html`, li, (err) => {
      if (err)
        console.log(err);
      else {
        console.log(`File written successfully. li.html`);
        reOrderIssuu.reOrderIssuu();
      }
    });

  })

});
