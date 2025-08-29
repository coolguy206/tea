const changeRow = require('./change-first-row-table.js');
// const changeOrder = require('./change-order.js');
const makeBrands = require('./make-shoe-brands.js');
const makeTable = require('./make-table.js');

module.exports = function () {

    //? change <th> of the .size-chart-table table
    changeRow();

    //? make the table
    makeTable();

    //? if shoes + accessories or sweaters + outerwear add the brands drop down
    makeBrands();

    //re-order the tables if shoes + accessories
    // changeOrder();
};