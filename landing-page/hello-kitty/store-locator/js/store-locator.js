const fs = require('fs');
const stores = require('./store-locator.json');

//MAKE <OPTION> FOR <SELECT> STATES
console.log(stores);

var states = [];
stores.map((val, i) => {
  var txt = val.State;
  txt = txt.toLowerCase();
  states.push(txt);
})

var uniqueStates = [...new Set(states)];
uniqueStates.sort();
// console.log(uniqueStates);

var optionElem = ``;
uniqueStates.map((val, i) => {
  var elem = `<option value="${val}">${val}</option>`;
  optionElem += elem;
})

// console.log(optionElem);

//WRITE OPTION.HTML FILE
fs.writeFile("../dev/option.html", optionElem, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File option.html written successfully\n");
  }
});

var lowercase = (a) => {
  var b = a;
  b = b.toLowerCase();
  return b;
};

//MAKE <LI> FOR <UL> FOR LIST OF STORES
var theStores = ``;
stores.map((val, i) => {
  var phoneNumber = val.Phone;
  phoneNumber = phoneNumber.replace(/Phone: /g, '');

  var thisState = val.State;
  thisState = thisState.toLowerCase();

  var name = lowercase(val.Name);
  var address = lowercase(val.Address);
  var city = lowercase(val.City);
  var state = lowercase(val.State);
  var website = lowercase(val.Website);

  var elem = `<li data-state="${thisState}"><h3>${name}</h3><p>${address}<br>${city}, ${state} ${val.Zip}</p><p><a href="tel:${phoneNumber}">${val.Phone}</a></p><p><a href="${website}" target="_blank">${website}</a></p></li>`;
  theStores += elem;
});

//WRITE LI.HTML FILE
fs.writeFile("../dev/li.html", theStores, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File li.html written successfully\n");
  }
});