const sizeChartArr = require('./measuring-tips.js');
// const deptCat = require('./set-dept-cat.js');
const changeBackground = require('./change-background-image.js');
const adjustMeasureCSS = require('./measuring-tips-css.js');
const adjustTipsCSS = require('./tips-css.js');
const addDataAttr = require('./add-data-dept.js');
const changeCopy = require('./change-measuring-tips-copy.js');


$(document).ready(function () {

    //? change the background image
    changeBackground(sizeChartArr);

    //? change the copy
    changeCopy(sizeChartArr);

    //? if shoes + accessories hide .tips & change min-height and padding of .measure-tips
    adjustMeasureCSS();

    //? if baby boy or baby girl adjust css on .tips
    adjustTipsCSS();

    //? add class to .tips
    addDataAttr();


    /*-----------------------------------------------------------------------------------------*/

    //? on click .tips

    $('.size-chart-container').find($('.tips')).click(function (e) {
        e.preventDefault();

        //? get the data-dept
        var dept = $(this).attr('data-dept');

        //? hide h1
        $('.size-chart-container h1').hide();

        //? add the content to .measure-take-over
        $.each(sizeChartArr, function (i, val) {
            if (dept == val.dept) {
                //? add the image
                //? desktop
                if ($(window).width() > 737) {
                    $('.measure-content img').attr('src', 'https://www.teacollection.com/mas_assets/theme/tea_collection/images/static/size-chart/171121/' + val.measure.img);
                }
                //? mobile
                else if ($(window).width() < 737) {
                    var imgSrc = val.measure.img;

                    imgSrc = imgSrc.split('.');
                    imgSrc = imgSrc[0] + '-m.' + imgSrc[1];

                    $('.measure-content img').attr('src', 'https://www.teacollection.com/mas_assets/theme/tea_collection/images/static/size-chart/171121/' + imgSrc);
                }

                //? add the chest text
                $('.measure-content .text .chest p').html(val.measure.chest);
                //? add the hips text
                $('.measure-content .text .hips p').html(val.measure.hips);
                //? add the waist text
                $('.measure-content .text .waist p').html(val.measure.waist);
            }
        });

        //? hide the other elements
        $('.size-chart-container .dropdowns, .size-chart-container .measure-tips, .size-chart-container .size-chart-table').hide();

        //? show .measure-take-over
        $('.measure-take-over').show();
    });


    /*-----------------------------------------------------------------------------------------*/

    //? collapse ul.department & ul.category when click on .measure-tips

    $('.measure-tips').click(function () {
        var dept = $('ul.department')
        var cat = $('ul.category')

        var arr = [dept, cat];

        $.each(arr, function (i, val) {
            var attribute = $(val).attr('style');
            if (attribute !== undefined) {
                $(val).removeAttr('style');
            }
        });
    });


    /*-----------------------------------------------------------------------------------------*/


    //? close the .measure-take-over
    $('.measure-take-over .measure, .measure-take-over .return').click(function () {
        //? show h1
        $('.size-chart-container h1').show();
        //? hide .measure-take-over
        $('.measure-take-over').hide();
        //? show the other elements
        $('.size-chart-container .dropdowns, .size-chart-container .measure-tips, .size-chart-container .size-chart-table').show();
        //? reset the .measure-content
        $('.measure-content img').attr('src', '');
        $('.measure-content .text .chest p, .measure-content .text .hips p, .measure-content .text .waist p').html('');
    });


    /*-----------------------------------------------------------------------------------------*/


});