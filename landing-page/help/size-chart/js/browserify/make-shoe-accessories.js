(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var makeTableHeader = require('./make-table-header.js');
var outputTable = require('./output-table.js');
module.exports = function (cat, sheetDept, dept, sheetCatArr, val, i) {
  //? function to make the shoes + accessories tables

  //? hide the top table
  $('.size-chart-table .the-table').hide();

  //? split the selected categories into an array
  var catArr = cat.split(',');

  //? loop through the array and check if any of the values match
  $.each(catArr, function (k, c) {
    // console.log(k,c);

    //? this var holds the actual category from the sheets because the format is shoes + accessories,brand
    var shoesAccess = sheetCatArr.split(',')[1];

    //? skip shoe + accessories but match the rest eg: socks & hats
    if (c !== 'shoes + accessories' && shoesAccess == c) {
      // console.log('match found');
      // console.log(shoesAccess, c);

      var rows;

      //? THIS MAKES THE MULTIPLE TABLES and table headers
      rows = makeTableHeader(i, val, dept, c);

      //? output the table contents
      outputTable(i, val, rows);

      //? stop the function
      return false;
    }
  });
};

},{"./make-table-header.js":2,"./output-table.js":4}],2:[function(require,module,exports){
"use strict";

var makeTd = require('./make-td.js');
module.exports = function (i, val, dept, subcat) {
  //? function to make table header because of shoes + accessories have multiple tables

  //? add new table
  $('.size-chart-table').append('<table data-num="' + i + '"><tr class="size-chart-header"><th>' + dept + ' ' + subcat + ' size chart</th></tr></table>');
  // console.log('rows: ', val);

  rows = val.merges[0].endColumnIndex - 1;

  //? if newborn change the colspan to 7 if all categories otherwise use the endColumnIndex
  if (subcat == "all categories" && dept == "newborn") {
    colspan = 7;
  } else {
    colspan = val.merges[0].endColumnIndex;
  }
  // console.log(colspan);

  //? add colspan to .size-chart-header
  $('.size-chart-table table[data-num="' + i + '"] th').attr('colspan', colspan);
  return rows;
};

},{"./make-td.js":3}],3:[function(require,module,exports){
"use strict";

module.exports = function (k, row, rows, tableElem) {
  //? function to make the <td>

  // console.log(tableElem);
  // console.log(k, row, rows);

  //? add the data <td>
  $.each(row.values, function (l, td) {
    //? loop only to the rows variable
    if (l <= rows) {
      var content;
      var fraction;
      var theFraction;
      // console.log(l, rows, row);

      if (td.formattedValue !== undefined) {
        //? formatting to match design

        content = td.formattedValue;
        // console.log(content);
        content = content.toLowerCase();
        content = content.replace(' - ', '&ndash;');
        content = content.replace('months', 'mos');
        content = content.replace('years', 'yrs');
        if (content.indexOf('inches') !== -1 || content.indexOf('pounds') !== -1) {
          content = content.split('\n');
          // console.log(content);
          content = content[0] + '<span>' + content[1] + '</span>';
        }
        if (content == 'shoe size') {
          content = '<span class="shoe-size">' + content + '</span>';
        }
        fraction = td.formattedValue;
        // console.log('the fraction: ',fraction);

        //? for shoes + accessories if not L/XL
        if (fraction !== 'L/XL' && fraction !== '2T/2' && fraction !== '3T/3' && fraction !== '4T/4') {
          //? if cell has two fractions example 58 1/2 - 61 1/2
          if (fraction.indexOf('/') !== -1 && fraction.indexOf('-') !== -1) {
            fraction = fraction.split('-');
            var twoFrac = [];
            $.each(fraction, function (m, frac) {
              var fracArray = frac.split(' ');
              $.each(fracArray, function (n, num) {
                if (num !== '') {
                  twoFrac.push(num);
                }
              });
            });

            // console.log(twoFrac);

            //? output
            //? example 61 1/2 - 64
            if (twoFrac[1].indexOf('/') !== -1 && twoFrac[3] == undefined) {
              var twoFracA = twoFrac[1].split('/');
              twoFrac[1] = '<sup class="frac">' + twoFracA[0] + '</sup>&frasl;<span class="frac denominator">' + twoFracA[1] + '</span>';
              $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + twoFrac[0] + ' ' + twoFrac[1] + ' &ndash; ' + twoFrac[2] + '</td>');
            }

            //? example 61 - 61 1/2
            else if (twoFrac[1].indexOf('/') == -1 && twoFrac[2].indexOf('/') !== -1) {
              var twoFracA = twoFrac[2].split('/');
              twoFrac[2] = '<sup class="frac">' + twoFracA[0] + '</sup>&frasl;<span class="frac denominator">' + twoFracA[1] + '</span>';
              $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + twoFrac[0] + ' &ndash; ' + twoFrac[1] + ' ' + twoFrac[2] + '</td>');
            }

            //? example 58 1/2 - 61 1/2
            else if (twoFrac[1].indexOf('/') !== -1 && twoFrac[1] !== undefined && twoFrac[3].indexOf('/') !== -1 && twoFrac[3] !== undefined) {
              var twoFracA = twoFrac[1].split('/');
              twoFrac[1] = '<sup class="frac">' + twoFracA[0] + '</sup>&frasl;<span class="frac denominator">' + twoFracA[1] + '</span>';
              var twoFracB = twoFrac[3].split('/');
              twoFrac[3] = '<sup class="frac">' + twoFracB[0] + '</sup>&frasl;<span class="frac denominator">' + twoFracB[1] + '</span>';
              $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + twoFrac[0] + ' ' + twoFrac[1] + ' &ndash; ' + twoFrac[2] + ' ' + twoFrac[3] + '</td>');
            }
          } else {
            //? only one fraction

            fraction = fraction.split(' ');
            $.each(fraction, function (m, frac) {
              // console.log(m, frac);
              if (frac.indexOf('/') !== -1) {
                theFraction = frac;
                // console.log('theFraction: ',theFraction);
              }
            });

            //? output
            if (theFraction !== undefined && theFraction.indexOf('/') !== -1) {
              theFraction = theFraction.split('/');
              var htmlFraction = '<sup class="frac">' + theFraction[0] + '</sup>&frasl;<span class="frac denominator">' + theFraction[1] + '</span>';
              $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + fraction[0] + ' ' + htmlFraction + '</td>');
            } else {
              $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + content + '</td>');
            }
          }
        } else if (fraction == 'L/XL' || fraction == '2T/2' || fraction == '3T/3' || fraction == '4T/4') {
          //? output sizes 'L/XL','2T/2','3T/3','4T/4'

          // console.log('yo buddy: ', fraction);
          $(tableElem + ' tr[data-num="' + k + '"]').append('<td>' + fraction + '</td>');
        }
      }
    }
  });
};

},{}],4:[function(require,module,exports){
"use strict";

var makeTd = require('./make-td.js');
module.exports = function (i, val, rows) {
  //? function to output the table contents

  //? output the table
  $.each(val.data[0].rowData, function (k, row) {
    //? add the row <tr>
    if (k > 2) {
      var tableLength = $('.size-chart-table table').length;
      // console.log(tableLength);

      //? check if the number of rows is even or odd then add class
      var tableNum = val.data[0].rowData.length - 4;

      //? if only one table (not shoes + accessories)
      if (tableLength == 1) {
        $('.size-chart-container .the-table').append('<tr data-num="' + k + '"></tr>');

        //? add the data <td>
        makeTd(k, row, rows, '.size-chart-container .the-table');
      } else if (tableLength > 1) {
        //? if multiple tables (shoes + accessories)
        // console.log(row.values[0].formattedValue);

        //? only make a row if the 1st td of the row has data
        if (row.values[0].formattedValue !== undefined) {
          $('.size-chart-table table[data-num="' + i + '"]').append('<tr data-num="' + k + '"></tr>');

          // console.log('more then one table\n this is the index\n' + i);

          //? add the data <td>
          makeTd(k, row, rows, '.size-chart-table table[data-num="' + i + '"]');
        }
      }
    }
  });
};

},{"./make-td.js":3}]},{},[1]);
