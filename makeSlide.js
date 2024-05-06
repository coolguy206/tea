const fs = require('fs');
const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())
const { executablePath } = require('puppeteer')
const cheerio = require('cheerio');

const vars = require(`./homepage/default/js/makeSlide-vars.js`);
// console.log(vars.writePath);

const theElem = require(`./homepage/default/js/makeSlide-elem.js`);
// console.log(theElem.elem());

const pdps = require(vars.pdpPath);
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

        var color = ``;
        if (url.indexOf('#') !== -1) {
            color = url.split('#')[1].replace(/%20/g, ' ');
        }

        // console.log(color);

        var redText = $(`.promo-teaser`).text();
        console.log(`red text`);
        console.log(redText);
        if(redText == "" || redText == undefined){
            redtText = "";
        } else {
            redText = `<span class="promo-teaser-thumb">${redText}</span>`;
        }

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
                size = size.replace(`_`, `-`);
                size = `${size}M`;
            }
            sizesArr.push(size);
        });

        var sizesNum = $('.swatch-size.numeric');
        sizesNum.map((i, val) => {
            var size = $(val).find('input').attr('value');
            // console.log(size);
            if (size.indexOf(`_`) !== -1) {
                size = size.replace(`_`, `-`);
                size = `${size}M`;
            }
            sizesArr.push(size);
        });

        // console.log(sizesArr);

        var sizesStr = sizesArr.toString().replace(/,/g, ', ');
        // console.log(sizesStr);

        var elem = theElem.elem(url, imgSrc, title, color, price, sizesStr, sizesArr, redText);
        // console.log(elem);

        // var elem = `<img data-set="${imgSrc}" alt="${title}">`;

        // console.log(elem);

        //? THIS FOR PDP IMAGES
        // var thisFileTitle = url.split(".html")[0].split("/")[5];
        // var fileName = `pdp-${thisFileTitle}.html`


        //? THIS FOR SLIDES
        var fileName = `slide-${index + 1}.html`;


        fs.writeFile(`${vars.writePath}/${fileName}`, elem, (err) => {
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
