"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var fs = require('fs');

var stores = require('./store-locator.json'); //MAKE <OPTION> FOR <SELECT> STATES


console.log(stores);
var states = [];
stores.map(function (val, i) {
  var txt = val.State;
  txt = txt.toLowerCase();
  states.push(txt);
});

var uniqueStates = _toConsumableArray(new Set(states));

uniqueStates.sort(); // console.log(uniqueStates);

var optionElem = "";
uniqueStates.map(function (val, i) {
  var elem = "<option value=\"".concat(val, "\">").concat(val, "</option>");
  optionElem += elem;
}); // console.log(optionElem);
//WRITE OPTION.HTML FILE

fs.writeFile("../dev/option.html", optionElem, function (err) {
  if (err) console.log(err);else {
    console.log("File option.html written successfully\n");
  }
});

var lowercase = function lowercase(a) {
  var b = a;
  b = b.toLowerCase();
  return b;
}; //MAKE <LI> FOR <UL> FOR LIST OF STORES


var theStores = "";
stores.map(function (val, i) {
  var phoneNumber = val.Phone;
  phoneNumber = phoneNumber.replace(/Phone: /g, '');
  var thisState = val.State;
  thisState = thisState.toLowerCase();
  var name = lowercase(val.Name);
  var address = lowercase(val.Address);
  var city = lowercase(val.City);
  var state = lowercase(val.State);
  var website = lowercase(val.Website);
  var elem = "<li data-state=\"".concat(thisState, "\"><h3>").concat(name, "</h3><p>").concat(address, "<br>").concat(city, ", ").concat(state, " ").concat(val.Zip, "</p><p><a href=\"tel:").concat(phoneNumber, "\">").concat(val.Phone, "</a></p><p><a href=\"").concat(website, "\" target=\"_blank\">").concat(website, "</a></p></li>");
  theStores += elem;
}); //WRITE LI.HTML FILE

fs.writeFile("../dev/li.html", theStores, function (err) {
  if (err) console.log(err);else {
    console.log("File li.html written successfully\n");
  }
});
//# sourceMappingURL=store-locator.js.map
