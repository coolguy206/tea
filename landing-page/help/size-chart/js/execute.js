const changeRow = require('./change-first-row-table.js');
// const changeOrder = require('./change-order.js');
const makeBrands = require('./make-shoe-brands.js');
const makeTable = require('./make-table.js');

//? function to execute and remake the tables
module.exports = function (sheets) {

    //? add the table header
    changeRow();

    //? make the table
    makeTable(sheets);

    //? if shoes + accessories or sweaters + outerwear add the brands drop down
    makeBrands();

    //re-order the tables if shoes + accessories
    // changeOrder();
};