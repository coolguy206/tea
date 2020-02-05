const vars = require('./vars.js');
const key = require('./key.js');
const showCatalog = require('./showCatalog.js');
const showThumbs = require('./showThumbs.js');

$(document).ready(function() {

    var a1 = vars.a1();
    // console.log(a1);

    var a2 = vars.a2();
    // console.log(a2);

    var f = vars.f();
    // console.log(f);

    var p = vars.p();
    // console.log(p);

    var sig1 = `${key.secret}${a1}${a2}apiKey${key.key}${f}`;
    // console.log(sig1);

    sig1 = $.md5(sig1);
    // console.log('sig1');
    // console.log(sig1);



    // console.log('get 1');
    // console.log(`${vars.baseUrl}?${vars.access}&${vars.action}&apiKey=${key.key}&${vars.format}&signature=${sig1}`);

    //start the initial get of the catalogs
    $.get(`${vars.baseUrl}?${vars.access}&${vars.action}&apiKey=${key.key}&${vars.format}&signature=${sig1}`, function(data) {
        // console.log(data);
        var totalCatalogs = data.rsp._content.result.totalCount;

        var sig2 = `${key.secret}${a1}${a2}apiKey${key.key}${f}${p}${totalCatalogs}`;

        // console.log('sig2');
        // console.log(sig2);

        sig2 = $.md5(sig2);

        // console.log('get 2');
        // console.log(`${vars.baseUrl}?${vars.access}&${vars.action}&apiKey=${key.key}&${vars.format}&pageSize=${totalCatalogs}&signature=${sig2}`);

        //get all the catalogs
        $.get(`${vars.baseUrl}?${vars.access}&${vars.action}&apiKey=${key.key}&${vars.format}&pageSize=${totalCatalogs}&signature=${sig2}`, function(data) {
            // console.log(data);
            var catalogs = data.rsp._content.result._content;

            // sort the catalogs from most recent
            catalogs.sort(function(x, y) {
                return new Date(y.document.publishDate) - new Date(x.document.publishDate);
            });

            //append the li with data-name
            $(catalogs).each(function(i, val) {
                var title = val.document.title;
                title = title.replace('Tea Collection - ', '');
                title = title.replace(/\(|\)/gi, '');
                $('.navigation-catalog ul').append(`<li data-name="${val.document.name}" data-desc="${val.document.description}"><h4>${title}</h4></li>`);
            });

            //load the first catalog
            var firstThumb = $('.navigation-catalog ul li:first-of-type').attr('data-name');
            var firstDesc = $('.navigation-catalog ul li:first-of-type').attr('data-desc');

            showCatalog(firstThumb, 1000, firstDesc);


            //load the thumbnails
            showThumbs();

            //remove loading
            $('.loading').remove();


            //click thumb change the flipbook
            $('.navigation-catalog ul li').click(function() {
                // console.log('li clicked');
                
                var name = $(this).attr('data-name');
                var desc = $(this).attr('data-desc');
                $('#flipBook').children().remove();

                showCatalog(name, 1000, desc);

                window.scrollTo(0, 140);


            });


        }); //end of $.get
    }); //end of $.get


});