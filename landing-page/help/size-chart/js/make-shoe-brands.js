const brandChange = require('./change-shoe-brand.js');
const sizeChartArr = require('./measuring-tips.js');
const shoeBrands = require('./shoe-brands.js');

module.exports = function () {
  //? function to make the brand drop down for shoes or sweaters

  //? remove .brands
  $('.brands, .brands-dropdown').remove();

  var dept = $('.size-chart-container select.department').val();
  var cat = $('.size-chart-container select.category').val();

  //? only execute if sweaters or shoes
  if (cat == 'sweater + outerwear' || cat.indexOf('shoes + accessories') !== -1) {

    //?make the element to add to the page
    var elem1 = '<div class="brands"></div>';
    var elem2 = '<div class="brands-dropdown"></div>';
    var h2;
    var text = '<p>Please select a brand from the menu below to view the size chart. Size chart will open in a new window.</p>'
    var select = $('<select class="brand" onchange="window.open(this.value)"><option>Please select a brand</option></select>');

    //? if shoes + accessories
    if (cat.indexOf('shoes + accessories') !== -1) {

      h2 = '<h2>' + dept + ' shoes size chart</h2>';

      //? add the <option>
      //? loop through the .sizeChartArr
      $.each(sizeChartArr, function (i, val) {
        //? find the matched dept
        if (dept == val.dept) {
          //? loop through dept shoes
          $.each(val.shoes, function (j, shoe) {
            //? loop through the shoeBrands
            $.each(shoeBrands, function (k, brand) {
              //? if match output
              if (shoe == brand.brand) {
                var option = '<option value="' + brand.url + '">' + shoe + '</option>';
                $(select).append(option);
              }
            });
          });
        }
      });

    } else if (cat == 'sweater + outerwear') {
      //? else if sweaters + outerwear
      h2 = '<h2>' + dept + ' outerwear size chart (other brands)</h2>';
      $(select).append('<option value="https://www.patagonia.com/size-boys-girls.html">patagonia</option>');
    }

    // console.log(h2, text, select);

    //?append the elements into .brands
    var brandsContainer = $(elem1).append(h2, text);
    var brandsDropdown = $(elem2).append(select);

    //? add to page
    $('.size-chart-table').append(brandsContainer);
    $('.size-chart-table').append(brandsDropdown);

    //? on .brand change
    brandChange();

  }

};