const fs = require('fs');
const basePath = `landing-page/black-friday/headers/`;
const pdpPath = `./${basePath}/js/pdps.js`;
const writePath = `${basePath}/dev/categories/`;
const includePath1 = `../images/221121-landing-d.html`;
const includePath2 = `../images/221121-landing-m-5ctas.html`;
const pdps = require(pdpPath);

// console.log(pdps);

// console.log(typeof pdps.pdps[0]);

pdps.pdps.map((pdp, index) => {
    // console.log(pdp.urls);

    var elemArr = [];
    var cat = pdp.cat.toLowerCase();
    // console.log(cat);

    pdp.urls.map((url, i) => {
        // console.log(url);
        var num = i + 1;
        var href = url;
        var str = url.split('/');
        str = str[str.length - 1];
        var elem = ``;
        if (cat !== `shop-all`) {
            //? NEWBORN
            if (cat == `newborn`) {
                switch (str) {
                    case `newborn-dresses`:
                        str = `dresses`;
                        break;
                    case `newborn-accessories`:
                        str = `accessories`;
                        break;
                    case `newborn-tops-and-bottoms`:
                        str = `tops and bottoms`
                        break;
                }
                elem = `<a class="cta-border a cta${num}" href="${href}">shop ${str}</a>`;

            }
            //? SHOP ALL CTA
            else if (str.indexOf(`shop-all`) !== -1) {
                elem = `<a class="cta-border a cta${num}" href="${href}">shop all</a>`;
            } else {
                //? ALL OTHER GENDER CATEGORIES
                switch (str) {
                    case `10`:

                        str = `shop $${str}`;
                        break;
                    case `12`:
                    case `15`:
                    case `18`:
                        str = `$${str} & under`
                        break;
                    case `20`:
                        str = `$${str} & up`
                        break;
                }
                elem = `<a class="cta-border a cta${num}" href="${href}">${str}</a>`;
            }
        } else {
            //? SHOP ALL CATEGORY
            if (str.indexOf(`-`) !== -1) {
                str = str.replace(`-`, ` `);
            }
            elem = `<a class="cta-border a cta${num}" href="${href}">shop ${str}</a>`;
        }

        elemArr.push(elem);
    });

    // console.log(elemArr);
    elemArr = elemArr.join('\n');

    var html = `
    <div class="container-black-friday">

        <div>
            ${elemArr}
        </div>
    
    </div>

    <style>
        include "../../css/styles.css"
        include "../../css/overrides.css"
        include "../../css/ctas.css"
    </style>

    <!-- inview.js -->
    <script src="/mas_assets/media/tea_collection/js/jquery.inview.js"></script>

    <script>
        include "../../js/jsmin/scripts.min.js"
    </script>
    `;
    // console.log(html);


    //? THIS FOR SLIDES
    var fileName = `${cat}.html`;
    // console.log(fileName);

    fs.writeFile(`${writePath}/${fileName}`, html, (err) => {
        if (err)
            console.log(err);
        else {
            console.log(`File ${fileName} written successfully`);
        }
    });

});