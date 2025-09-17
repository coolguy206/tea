module.exports = function (urlDept) {
    //? hide measure tips if any of these depts
    // if (urlDept == `newborn` || urlDept == `adult unisex` || urlDept == `women` || urlDept == `men`) {
    //     $('.measure-content').removeClass('active');
    //     return;
    // }

    //? remove class active from all
    $('.measure-content .category-headers a, .measure-content .measure-container, .measure-content').removeClass('active');

    //? set the measuring tips dept
    var headers = $('.measure-content .category-headers a');
    headers.map((i, val) => {
        // console.log($(val).text());
        if ($(val).text() == urlDept) {
            $(val).addClass('active')
        }
    });

    //? add class active to measure-container with matching header
    var m = $('.measure-content .measure-container');
    for (let i = 0; i < m.length; i++) {
        var theClass = $(m[i]).attr('class').split('measure-container')[1].replace(/ /, '');
        console.log($(m[i]));
        console.log(theClass);
        if (theClass == urlDept) {
            $(m[i]).addClass('active')
            break;
        }
    }

    //? add class active to show the measuring tips entire container
    $('.measure-content').addClass('active');

};