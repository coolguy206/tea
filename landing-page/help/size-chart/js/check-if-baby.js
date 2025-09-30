
module.exports = function (dept, cat) {
    //? function to return cat if dept is baby

    //? if baby girl or baby boy and category is dresses, tops, bottoms, swim, sweater + outerwear, pajamas change to match sheet because it does not match the measuring-tips.js array of objects
    if (dept == `baby girl`) {

        if (cat == `dresses, tops, bottoms, swim, sweater + outerwear, pajamas`) {
            cat = `dresses,tops,tees + shirts,bodysuits,bottoms,swim,sweater + outerwear,pajamas`;
        }
    } else if (dept == `baby boy`) {

        if (cat == `tees + shirts, bottoms, swim, sweater + outerwear, pajamas`) {
            cat = `dresses,tops,tees + shirts,bodysuits,bottoms,swim,sweater + outerwear,pajamas`;
        }
    }

    return cat;

};