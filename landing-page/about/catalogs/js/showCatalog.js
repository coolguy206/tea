const vars = require('./vars.js');

module.exports = function(name, width, desc) {
    var url = name;
    url = vars.issu + url;
    // console.log('showCatalog.js');
    // console.log(url);
    url = encodeURIComponent(url);
    $.get(`https://issuu.com/oembed?url=${url}&format=json&maxwidth=${width}`, function(data) {
        // console.log(data);
        $('#flipBook').append(data.html);
        $('#flipBook').append(`<p> ${desc}</p>`);
    });
};