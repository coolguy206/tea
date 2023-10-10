const fs = require('fs');
const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())
const { executablePath } = require('puppeteer')
const cheerio = require('cheerio');

const pdpPath = `./landing-page/shops/gift-shop/default/js/pdps.js`;
const writePath = `landing-page/shops/gift-shop/default/dev/shop-slideshow/`;
const pdps = require(pdpPath);

// console.log(pdps);

// console.log(typeof pdps.pdps[0]);

pdps.pdps.map((pdpURL, index) => {
    console.log(pdpURL);


    puppeteer.launch({ headless: true, executablePath: executablePath() }).then(async browser => {
        const page = await browser.newPage()
        await page.goto(pdpURL);
        await page.waitForTimeout(2000)
        const html = await page.content();
        // console.log(html);

        const $ = cheerio.load(html);

        var title = $('h1').text();
        // console.log(title);

        // var url = pdps.pdps[0];
        var url = pdpURL;
        // console.log(url);

        var color = url.split('#')[1].replace(/%20/g, ' ');
        // console.log(color);

        var imgSrc = $('.product-main-image.js-product-main-image').attr('src');
        // console.log(imgSrc);

        var price = $('span[itemprop=price]').text();
        // console.log(price);

        var sizesArr = [];

        var sizesAlpha = $('.swatch-size.alpha');
        sizesAlpha.map((i, val) => {
            var size = $(val).find('input').attr('value');
            // console.log(size);
            if (size.indexOf(`_`) !== -1) {
                size = `${size}M`;
            }
            sizesArr.push(size);
        });

        var sizesNum = $('.swatch-size.numeric');
        sizesNum.map((i, val) => {
            var size = $(val).find('input').attr('value');
            // console.log(size);
            if (size.indexOf(`_`) !== -1) {
                size = `${size}M`;
            }
            sizesArr.push(size);
        });

        // console.log(sizesArr);

        var sizesStr = sizesArr.toString().replace(/,/g, ', ');
        // console.log(sizesStr);

        var elem = `<li>
    <div class="thumb-grid item">
        <span class="img">
            <a href="${url}"
                data-hash="">
                <img class="image" src="${imgSrc}"
              alt="${title}" width="500" height="500">
            </a>
            <span
                data-href="${url}"
                data-color="${color}" class="js-qv ">Quick View</span>
        </span>
        <div class="thumb-content">
            <a class="name"
                href="${url}"
                data-hash="">
                <span class="model">${title}</span>
            </a>

            <div class="price-wrap">
                <div class="price">
                    <span id="store_price" class="price">$${price}</span>
                </div>
            </div>

            <p class="size">
                <span class="thumb-sizes" title="${sizesStr}">
                    Sizes ${sizesArr[0]} to ${sizesArr[sizesArr.length - 1]}
                </span>
            </p>

        </div>
    </div>
</li>`;

        // console.log(elem);

        var fileName = `slide-${index + 1}.html`;

        fs.writeFile(`${writePath}/${fileName}`, elem, (err) => {
            if (err)
                console.log(err);
            else {
                console.log(`File ${fileName} written successfully`);
            }
        });

        // await page.screenshot({ path: 'cointracker_home.png', fullPage: true }) 

        await browser.close()
    });



});