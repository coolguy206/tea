$(document).ready(function() {

    const baseUrl = `https://www.teacollection.com`;
    var imgArr = $('.content-wrap').find('img');
    $.each(imgArr, function(i, val) {
        var src = $(val).attr('src');
        $(val).attr('src', baseUrl + src);
    });

});