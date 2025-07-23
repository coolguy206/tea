const fs = require('fs');
const util = require('util');
const writeFilePromise = util.promisify(fs.writeFile);
const resolve = require('path').resolve
require('dotenv').config()
const moment = require('moment');
const Client = require('ftp');
const schedule = require('node-schedule');


// console.log(`TEA_REST_API_USERNAME: ${process.env.TEA_REST_API_USERNAME}`);
// console.log(`TEA_REST_API_PASSWORD: ${process.env.TEA_REST_API_PASSWORD}`);

//? REST AUTH
let auth = `${process.env.TEA_REST_API_USERNAME}:${process.env.TEA_REST_API_PASSWORD}`;
// console.log(auth)

auth = Buffer.from(auth).toString('base64');
auth = `Basic ${auth}`;
// console.log('Base64 Encoded:', auth);


//? RUN THE SCHEDULE TO EXECUTE REST.JS EVERY HOUR
const job = schedule.scheduleJob('0 * * * *', function () {
    console.log(`running scheduled task to update pdps-order-lines.js`);

    //? GET TODAY'S DATE AND TIME BUT 3HRS BEFORE UNLESS IT IS 12AM 
    //? THEN CHANGE THE DATE TO THE DAY BEFORE AND CHANGE THE TIME TO LIKE 10PM
    let today = new Date();
    let hours = today.getHours();
    let day = today.getDate();
    if (hours < 3) {
        day = day - 1;
        today.setDate(day);
        hours = 23 - 3;
    } else {
        hours = hours - 3;
    }
    today.setHours(hours);

    //? FOR TESTING
    // today = 1753252235350;

    //? CONVERT TO UNIX TIME
    today = moment(today).unix();
    // console.log(`today: ${today}`);

    //? GOT THIS FROM POSTMAN BUT AUTH IS BASIC EMAIL:PASSWORD USING BASE64 ENCODE
    const myHeaders = new Headers();
    myHeaders.append("Authorization", auth);
    myHeaders.append("Cookie", "cart_marker=6c6f10bb4e3b0951317d587e74902bf509b1f150; ds3=a02404bd65aa5b2e4fd25ed9770b8220");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    //? GET THE PDPS ORDER FROM TODAY
    fetch(`https://www.teacollection.com/?type=rest&page=order_lines&format=json&created:after=${today}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            // console.log(result);

            //? CHECK IF THERE ARE ORDERS OTHERWISE JUST RETURN
            if (result.order_lines !== undefined) {

                //? SKUS ARRAY
                let skuArray = [];

                //? CONVERT INTO ARRAY OF OBJS
                const orderLinesArray = Object.values(result.order_lines).filter(item => typeof item === 'object');
                // console.log(orderLinesArray)

                //? PUSH INTO ARRAY
                orderLinesArray.map((val, i) => {
                    // console.log(val.sku);
                    let sku = val.sku;
                    sku = sku.split('-')[0];
                    skuArray.push(sku);
                });

                //? REMOVE DUPLICATES
                const uniqueArray = [...new Set(skuArray)];
                // console.log(uniqueArray);

                return uniqueArray;
            } else {
                console.log(`no purchases`);
                return;
            }

        }).then((arr) => {

            //? CHECK IF THERE IS AN ARRAY OTHERWISE STOP THE SCRIPT
            if (arr !== undefined) {

                //? GET ALL THE PDP INFO FROM THE ARRAY OF SKUS
                Promise.all(arr.map((val, i) => {
                    // console.log(val);

                    const myHeaders = new Headers();
                    myHeaders.append("Authorization", auth);
                    myHeaders.append("Cookie", "cart_marker=6c6f10bb4e3b0951317d587e74902bf509b1f150; ds3=a02404bd65aa5b2e4fd25ed9770b8220");

                    const requestOptions = {
                        method: "GET",
                        headers: myHeaders,
                        redirect: "follow"
                    };

                    return fetch(`https://www.teacollection.com/?type=rest&full=1&page=items&format=json&sku:begins=${val}&active=1`, requestOptions)
                        .then((response) => response.json())
                        .then((result) => {
                            // console.log(result)

                            //? CONVERT INTO ARRAY OF OBJS
                            const resultArray = Object.values(result.items).filter(item => typeof item === 'object');
                            // console.log(resultArray[0]);

                            //? RETURN ONLY THE 1ST ONE BECAUSE ITS ONLY DIFFERENT SIZES
                            return resultArray[0];
                        })
                        .catch((error) => console.error(error));

                })).then((result) => {
                    // console.log(result);

                    //? MAKE ARRAY OF PDP OBJS RETURNED FROM THE FETCH TO WRITE TO FILE AND UPLOAD FTP
                    let arr = [];

                    result.map((val, i) => {

                        //? DON'T ADD THE GIFT CARD PURCHASES THOUGH
                        let theSku = val.sku;
                        if (theSku.indexOf('GIFTFUROSERV') == -1) {
                            let obj = {};
                            obj.sku = val.sku;
                            obj.name = val.model;
                            obj.color = val.color;
                            obj.img = `{image size="original" type="item" id="${val.sku}"}`;

                            let theSku = val.sku;
                            theSku = theSku.split('-')[0];
                            let theName = val.model;
                            theName = theName.replace(/ /g, '-').toLowerCase();
                            obj.url = `https://www.teacollection.com/product/${theSku}/${theName}.html#${val.color}`;
                            // console.log(val.sku);
                            // console.log(val.model);
                            // console.log(val.color);
                            if (val.store_price !== val.retail_price) {
                                obj.store_price = `$${Number(val.store_price).toFixed(2)}`;
                                obj.retail_price = `$${Number(val.retail_price).toFixed(2)}`;
                                // console.log(val.store_price);
                                // console.log(val.retail_price);
                            } else {
                                obj.store_price = `$${Number(val.store_price).toFixed(2)}`;
                                // console.log(val.store_price);
                            }

                            if (val.promo_teaser !== "") {
                                obj.promo_teaser = val.promo_teaser;
                                // console.log(val.promo_teaser);
                            }

                            arr.push(obj);
                        }

                    });

                    // console.log(arr);

                    // let json = arr;
                    let json = JSON.stringify(arr);

                    //? WRITE FILE
                    writeFilePromise('pdps-order-lines.js', json).then(() => {
                        console.log('successfully created pdps-order-lines.js');

                        //? UPLOAD FILE FTP
                        var url = `/media/tea_collection/js/`;

                        var c = new Client();
                        c.on('ready', function () {

                            //? UPLOAD THE FILE
                            c.put(`pdps-order-lines.js`, `${url}pdps-order-lines.js`, (err) => {
                                if (err) throw err;
                                console.log(`successfully uploaded file: pdps-order-lines.js`);

                                c.end();
                            });

                        });

                        c.connect({
                            host: process.env.FTP_HOST,
                            user: process.env.FTP_USER,
                            password: process.env.FTP_PASSWORD
                        });

                    }).catch((error) => console.error('Error writing file:', error));
                });

            } else {
                console.log(`stop script`);
                return;
            }

        }).catch((error) => console.error(error));


});
