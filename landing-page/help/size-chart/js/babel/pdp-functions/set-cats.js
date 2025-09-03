"use strict";

module.exports = function (cat, dept) {
  //? function to set categories to match sheets

  if (cat == 'hoodies' || cat == 'tops') {
    if (dept == 'girl' || dept == 'baby girl') {
      cat = 'tops';
    } else if (dept == 'boy' || dept == 'baby boy') {
      cat = 'tees + shirts';
    }
  } else if (cat == 'dresses') {
    cat = 'dresses';
  } else if (cat == 'leggings' || cat == 'pants' || cat == 'skirts' || cat == 'bottoms') {
    cat = 'bottoms';
  } else if (cat == 'swimwear') {
    cat = 'swim';
  } else if (cat == 'outerwear' || cat == 'sweaters') {
    cat = 'sweater + outerwear';
  } else if (cat == 'sleepwear') {
    cat = 'pajamas';
  } else if (cat == 'accessories' || cat == 'shoes') {
    cat = 'shoes + accessories';
  } else {
    if (dept == 'girl') {
      // console.log('its girl defaults');
      cat = 'dresses';
    } else if (dept == 'boy') {
      // console.log('its boy defaults');
      cat = 'tees + shirts';
    } else if (dept == 'baby girl' || dept == 'baby boy') {
      // console.log('its baby girl & baby boy defaults');
      cat = 'rompers';
    }

    // console.log('results ',cat);
  }
  return cat;
};
