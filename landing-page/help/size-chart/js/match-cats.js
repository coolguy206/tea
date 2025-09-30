module.exports = function (urlDept, urlCat) {
    //? function to match the category to the sheets category

    //? this will set the correct cats to match the sheets based on the receieved url params
    //? for example: selectedDept=baby girl&selectedCat=swim
    if (urlDept == `girl`) {

        switch (urlCat) {
            case `dresses`:
            case `tops`:
            case `bottoms`:
                $('.size-chart-container select.category').val(`tops,dresses,bottoms`);
                break;
            default:
                $('.size-chart-container select.category').val(urlCat);
                break;
        }

    } else if (urlDept == `boy`) {

        switch (urlCat) {
            case `tees + shirts`:
            case `bottoms`:
                $('.size-chart-container select.category').val(`tees + shirts,bottoms`);
                break;
            default:
                $('.size-chart-container select.category').val(urlCat);
                break;
        }

    } else if (urlDept == `baby girl`) {

        switch (urlCat) {
            case `dresses`:
            case `tops`:
            case `bottoms`:
            case `swim`:
            case `sweater + outerwear`:
            case `pajamas`:
                $('.size-chart-container select.category').val(`dresses, tops, bottoms, swim, sweater + outerwear, pajamas`);
                break;
            default:
                $('.size-chart-container select.category').val(urlCat);
                break;
        }

    } else if (urlDept == `baby boy`) {

        switch (urlCat) {
            case `tees + shirts`:
            case `bottoms`:
            case `swim`:
            case `sweater + outerwear`:
            case `pajamas`:
                $('.size-chart-container select.category').val(`tees + shirts, bottoms, swim, sweater + outerwear, pajamas`);
                break;
            default:
                $('.size-chart-container select.category').val(urlCat);
                break;
        }

    } else if (urlDept == `newborn`) {

        switch (urlCat) {
            case `all categories`:
                $('.size-chart-container select.category').val(`all categories, Booties, Bibs, hats`);
                break;
            default:
                $('.size-chart-container select.category').val(urlCat);
                break;
        }

    } else if (urlDept == `women`) {

        switch (urlCat) {
            case `swim`:
            case `pajamas`:
            case `dresses`:
            case `tops`:
                $('.size-chart-container select.category').val(`swim,pajamas,dresses,tops`);
                break;
            default:
                $('.size-chart-container select.category').val(urlCat);
                break;
        }

    } else {
        $('.size-chart-container select.category').val(urlCat);
    }

};