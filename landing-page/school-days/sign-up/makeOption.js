const fs = require('fs');
const getJSON = require('get-json');
const util = require('util');
const writeFileContent = util.promisify(fs.writeFile);

var jsonURL = `https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json`;

var option = ``;

getJSON(jsonURL)
  .then((response) => {
    // console.log(response);
    response.map((val, i) => {
      switch (val.name) {
        case 'American Samoa':
        case 'Federated States Of Micronesia':
        case 'Guam':
        case 'Marshall Islands':
        case 'Northern Mariana Islands':
        case 'Palau':
        case 'Puerto Rico':
        case 'Virgin Islands':
          console.log('nope');
          break;
        default:
          option += `<option value="${val.abbreviation}">${val.name}</option>`;
      }
    });

    console.log(option);

    writeFileContent(`dev/option.html`, option).then((data) => {
      console.log(`File written successfully. option.html`);
    })


  }).catch((error) => {
    console.log(error);
  });