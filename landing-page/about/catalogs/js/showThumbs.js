const vars = require('./vars.js');

module.exports = function() {
    var thumbs = $('.navigation-catalog ul li');
    $(thumbs).each(function(i, val) {
        var url = $(val).attr('data-name');
        url = vars.issu + url;
        url = encodeURIComponent(url);
        $.get(`https://issuu.com/oembed?url=${url}&format=json`, function(data) {
            // console.log(data);
            $(val).prepend(`<img src="${data.thumbnail_url}" alt="${data.title}"/>`);
        });
    });
};