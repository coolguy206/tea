"use strict";

module.exports = function (dept) {
  //? function to set categories to match sheets

  if (dept == 'kid girl' || dept == '') {
    dept = 'girl';
  } else if (dept == 'little girl') {
    dept = 'baby girl';
  } else if (dept == 'little boy') {
    dept = 'baby boy';
  } else if (dept.indexOf('newborn') !== -1 || dept.indexOf('layette') !== -1) {
    dept = 'newborn';
  }
  return dept;
};
