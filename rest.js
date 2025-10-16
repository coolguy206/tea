const fs = require('fs');
const util = require('util');
const writeFilePromise = util.promisify(fs.writeFile);
const resolve = require('path').resolve;
require('dotenv').config();
const moment = require('moment');
const Client = require('ftp');
const schedule = require('node-schedule');

//? Convert fetch requests into async functions
async function fetchData(url, options) {
    const response = await fetch(url, options);
    return response.json();
}

//? Schedule job to run every hour
const job = schedule.scheduleJob('0 * * * *', async function () {
    console.log(`running scheduled task to update pdps-order-lines.js`);

    //? Calculate the date/time 3 hours before or set to 10PM previous day
    let today = new Date();
    let hours = today.getHours();
    let day = today.getDate();

    if (hours < 3) {
        day -= 1; //? Subtract a day if before 3AM
        today.setDate(day);
        today.setHours(22, 0, 0, 0); //? Set to 10PM previous day
    } else {
        today.setHours(hours - 3, 0, 0, 0); //? Subtract 3 hours
    }

    //? Convert to UNIX timestamp
    console.log(`today: ${today}`);
    today = moment(today).unix();
    console.log(`today: ${today}`);

    //? Prepare headers with Basic Auth
    const auth = Buffer.from(`${process.env.TEA_REST_API_USERNAME}:${process.env.TEA_REST_API_PASSWORD}`).toString('base64');
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic ${auth}`);

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    //? Fetch order lines created after the calculated date
    const result = await fetchData(`https://www.teacollection.com/?type=rest&page=order_lines&format=json&created:after=${today}`, requestOptions);

    if (result.order_lines !== undefined) {
        let skuArray = [];
        const orderLinesArray = Object.values(result.order_lines).filter(item => typeof item === 'object');

        //? Process order lines to extract SKUs
        orderLinesArray.forEach(val => {
            let sku = val.sku.split('-')[0];
            skuArray.push(sku);
        });

        const uniqueArray = [...new Set(skuArray)]; //? Remove duplicates

        //? Fetch PDP info for each SKU
        const pdpResults = await Promise.all(uniqueArray.map(async (val) => {
            const response = await fetch(`https://www.teacollection.com/?type=rest&full=1&page=items&format=json&sku:begins=${val}&active=1`, requestOptions);
            const result = await response.json();
            const resultArray = Object.values(result.items).filter(item => typeof item === 'object');
            return resultArray[0]; //? Return first item for each SKU because of variants
        }));

        //? Process PDP results
        const arr = [];

        for (const val of pdpResults) {
            //? sku must contain a hyphen because otherwise it is a parent sku & DON'T ADD THE GIFT CARD PURCHASES
            if (val.sku.includes('-') && !val.sku.includes('GIFTFUROSERV')) {
                const obj = {};

                const response = await fetch(`https://teacollection.com/?type=bare&page=item&action=images&id=${val.sku}`);
                const imgSrcs = await response.json();

                if (imgSrcs[0]) {
                    obj.img = `<img src="${imgSrcs[0]}" alt="${val.model}">`;
                }

                obj.sku = val.sku;
                obj.name = val.model;

                //? Build URL based on SKU and model
                let theSku = val.sku.split('-')[0];
                let theName = val.model.replace(/ /g, '-').toLowerCase();

                if (val.color !== undefined) {
                    obj.color = val.color;
                    obj.url = `https://www.teacollection.com/product/${theSku}/${theName}.html#${obj.color}`;
                } else {
                    obj.url = `https://www.teacollection.com/product/${theSku}/${theName}.html`;
                }

                //? Store prices
                if (val.store_price !== val.retail_price) {
                    obj.store_price = `$${Number(val.store_price).toFixed(2)}`;
                    obj.retail_price = `$${Number(val.retail_price).toFixed(2)}`;
                } else {
                    obj.store_price = `$${Number(val.store_price).toFixed(2)}`;
                }

                if (val.promo_teaser !== "") {
                    obj.promo_teaser = val.promo_teaser;
                }

                arr.push(obj);

            }
        }

        const json = JSON.stringify(arr);
        await writeFilePromise('pdps-order-lines.js', json);
        console.log('successfully created pdps-order-lines.js');

        //? Upload files via FTP
        const ftpClient = new Client();
        ftpClient.on('ready', () => {
            ftpClient.put('pdps-order-lines.js', '/media/tea_collection/js/pdps-order-lines.js', (err) => {
                if (err) throw err;
                console.log('successfully uploaded pdps-order-lines.js');
                ftpClient.end();
            });
        });
        ftpClient.connect({ host: process.env.FTP_HOST, user: process.env.FTP_USER, password: process.env.FTP_PASSWORD });
    } else {
        console.log(`no purchases`);
        return;
    }
});