"use strict";

var fs = require('fs');

var axios = require('axios');

var md5 = require('md5');

var fetch = require('node-fetch');

require('dotenv').config(); // console.log(fetch);
//add the states


fetch("https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json").then(function (result) {
  // console.log(result);
  return result.json();
}).then(function (result) {
  // console.log(result);
  var elem = "";
  result.map(function (val, i) {
    // console.log(val, i);
    // console.log(val.name);
    switch (val.name) {
      case 'American Samoa':
      case 'Federated States Of Micronesia':
      case 'Guam':
      case 'Marshall Islands':
      case 'Northern Mariana Islands':
      case 'Palau':
      case 'Puerto Rico':
      case 'Virgin Islands':
        // console.log('nope');
        break;

      default:
        var option = '<option value="' + val.abbreviation + '">' + val.name + '</option>';
      // $('#states').append(option);
    }

    elem = elem + option;
  }); // console.log(elem);

  fs.writeFile("../dev/option.html", elem, function (err) {
    if (err) console.log(err);else {
      console.log("File written successfully. option.html");
    }
  });
});
//# sourceMappingURL=makeStates.js.map
