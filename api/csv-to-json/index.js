//CHANGE THIS TO CSV FILE NAME
const name = `urls`;

const fs = require('fs');
const csvFilePath = `csv/${name}.csv`
const csv = require('csvtojson')
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    // console.log(jsonObj);
    const data = JSON.stringify(jsonObj);
    // console.log(data);

    fs.writeFile(`json/${name}.json`, data, (err) => {
      if (err) throw err;
      console.log(`The ${name} file has been saved!`);
    });

  })