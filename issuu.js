const fs = require('fs');
const axios = require('axios');
const md5 = require('md5');
const reOrderIssuu = require('./re-order-issuu.js');
require('dotenv').config()

// console.log(process.env.ISSUU_APIKEY, process.env.ISSUU_SECRET);

// console.log(reOrderIssuu);

const baseUrl = `https://api.issuu.com/1_0`;

const access = `access=public`;
const a1 = access.replace(/=/g, '');

const action = `action=issuu.documents.list`;
const a2 = action.replace(/=/g, '');

const format = `format=json`;
const f = format.replace(/=/g, '');

const pageSize = `pageSize=`;
const p = pageSize.replace(/=/g, '');

const resultOrder = `resultOrder=`;
const r = resultOrder.replace(/=/g, '');

const startIndex = `startIndex=`;
const s = startIndex.replace(/=/g, '');

const issuu = `https://issuu.com/teacollection/docs/`;

// console.log(baseUrl, access, a1, action, a2, format, f, pageSize, p, issuu);

var sig = `${process.env.ISSUU_SECRET}${a1}${a2}apiKey${process.env.ISSUU_APIKEY}${f}${p}30${r}asc`;
// console.log(sig);

sig = md5(sig);
// console.log(sig);

var theCount = {
  startIndex: 0,
  more: true
};

var catalogs = [];
var promises = [];
var li = ``;

axios.get(`${baseUrl}?${access}&${action}&apiKey=${process.env.ISSUU_APIKEY}&${format}&${pageSize}30&${resultOrder}asc&signature=${sig}`).then((res) => {
  // console.log(res.data.rsp._content.result);

  var data = res.data.rsp._content.result;
  theCount.totalCount = data.totalCount;
  theCount.startIndex = theCount.startIndex + data.pageSize;
  theCount.more = data.more;
  // console.log(theCount);
  var theCatalogs = data._content;
  // console.log(theCatalogs);
  theCatalogs.map((val, i) => {
    catalogs.push(val);
  })
  // console.log(catalogs);

}).then(() => {
  // console.log(`2nd then`);
  // console.log(theCount);
  // console.log(catalogs);

  for (var i = theCount.startIndex; i <= theCount.totalCount; i = i + 30) {
    // console.log(i);
    var theSig = `${process.env.ISSUU_SECRET}${a1}${a2}apiKey${process.env.ISSUU_APIKEY}${f}${p}30${r}asc${s}${i}`;
    // console.log(theSig);
    theSig = md5(theSig);

    promises.push(axios.get(`${baseUrl}?${access}&${action}&apiKey=${process.env.ISSUU_APIKEY}&${format}&${pageSize}30&${resultOrder}asc&${startIndex}${i}&signature=${theSig}`).then((res) => {
      // console.log(res.data.rsp._content.result._content);
      var data = res.data.rsp._content.result;
      // theCount.totalCount = data.totalCount;
      theCount.startIndex = theCount.startIndex + data.pageSize;
      theCount.more = data.more;

      var theCatalogs = data._content;
      theCatalogs.map((val, i) => {
        catalogs.push(val);
      });

    }));
  }
  // console.log(`outside loop`);
  // console.log(catalogs);
  // console.log(catalogs.length);
  Promise.all(promises).then(() => {
    // console.log(catalogs[0]);

    catalogs.sort(function(x, y) {
      return new Date(y.document.publishDate) - new Date(x.document.publishDate);
    });

    catalogs.map((val, i) => {
      var title = val.document.title;
      title = title.replace('Tea Collection - ', '');
      title = title.replace(/\(|\)/gi, '');
      imgUrl = `https://image.issuu.com/${val.document.documentId}/jpg/page_1_thumb_large.jpg`;

      li = `${li}\n<li data-name="${val.document.name}" data-desc="${val.document.description}"><img src="${imgUrl}" alt="${title}"><h4>${title}</h4></li>\n`;

    });

    // console.log(li);

    fs.writeFile(`landing-page/about/catalogs/dev/li.html`, li, (err) => {
      if (err)
        console.log(err);
      else {
        console.log(`File written successfully. li.html`);
        reOrderIssuu.reOrderIssuu();
      }
    });

  });

});