var json = require('./json/rompers.json');
const writeJsonFile = require('write-json-file');

var baseMeta = `tea, tea collection,  kids clothes, children clothes, kids clothing, kids outfits,`;
// json[0].meta_keywords = baseMeta;
// console.log(json[0]);

json.forEach(function(val, i) {
  // console.log(val.sku)

  var color = ``;
  if (val.parent_id == 'NULL') {
    color = json[i + 1].color_bucket;

  } else {
    color = val.color_bucket;
  }
  color = color.toLowerCase();
  // console.log(color);


  var dept = val.department;
  dept = dept.toLowerCase();
  if (dept == `kid girl`) {
    dept = 'girl';
  } else if (dept == `little girl`) {
    dept = `baby girl`;
  } else if (dept == `little boy`) {
    dept = `baby boy`;
  } else if (dept == `layette girl`) {
    dept = `newborn girl`;
  } else if (dept == `layette boy`) {
    dept = `newborn boy`;
  } else if (dept == `layette unisex`) {
    dept = `newborn unisex`;
  }

  // console.log(dept);

  var cat = val.category;
  cat = cat.toLowerCase();
  if (cat == 'sleepwear') {
    cat = 'pajamas';
  }
  // console.log(cat);


  if (color == `other color` || color == ``) {
    color = `other-color`;
  }

  var size = val.size_description;
  // console.log(size);
  if (size == `NULL` || size == ``) {
    // console.log(`no size`);
    // console.log(val);
    var nextSize = json[i + 1].size_description;
    size = `size= ${nextSize}`;
  } else {
    size = `size= ${size}`;
  }


  var price = val.store_price;
  // price = Number(price);

  if (price < 26) {
    // console.log(price);
    price = `price-0-25`;
  } else if (price > 25 && price < 51) {
    // console.log(price);
    price = `price-25-50`
  } else if (price > 50 && price < 76) {
    // console.log(price);
    price = `price-50-75`
  } else if (price > 75 && price < 101) {
    // console.log(price);
    price = `price-75-100`
  } else if (price > 100) {
    // console.log(price);
    price = `price-100+`
  }
  // console.log(price);

  var meta = baseMeta + ` ${dept}, ${cat}, ${color}, ${price},`;
  val.meta_keywords = meta;

  if (val.parent_id == `NULL`) {
    console.log(val);
  }

});

// console.log(json);

writeJsonFile('json/output.json', json);