"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phoneConvert = void 0;

var phoneConvert = function phoneConvert(string) {
  var newString = string.match(/[0-9]{0,14}/g);

  if (newString === null) {
    return '';
  } // Join parts returned from RegEx match


  newString = newString.join(''); // Start number with "+"
  // newString = '+' + newString;

  if (newString[0].includes('1')) {
    newString = '+' + newString;
  } else {
    newString = '+1' + newString;
  } // Limit length to 15 characters


  newString = newString.substring(0, 15);
  return newString;
};

exports.phoneConvert = phoneConvert;
//# sourceMappingURL=phone.js.map
