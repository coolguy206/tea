const fetch = require('node-fetch');
require('dotenv').config()

var apiKey = process.env.KLAVIYO_API_KEY;

var userEmail = `cele.trident@gmail.com`;

var urlProfile = `https://a.klaviyo.com/api/profiles/?filter=equals(email,%22${userEmail}%22)`;

const options = {
    method: 'GET',
    mode: "cors",
    credentials: "include",
    headers: {
        accept: 'application/json',
        revision: '2023-09-15',
        Authorization: `Klaviyo-API-Key ${apiKey}`,
    }
};


//? STEP 1. GET THE USER ID
//? STEP 2. GET THE USER RECENT ACTIVITY
//? STEP 3. FILTER USER ACTIVITY TO VIEWED PRODUCT

fetch(urlProfile, options)
    .then(res => res.json())
    .then((json) => {
        // console.log(json);
        var profile = json;
        // console.log(profile.data[0].id);

        //? GET THE USER ID
        var id = profile.data[0].id;
        // console.log(id);

        return id;
    })
    .then((id) => {
        // console.log(id);

        const urlEvents = `https://a.klaviyo.com/api/v1/person/${id}/metrics/timeline?count=50&sort=desc&api_key=${apiKey}`;

        //? GET THE USER ACTIVITY
        fetch(urlEvents, options)
            .then(res => res.json())
            .then((json) => {
                // console.log(json)

                //? FILTER ACTIVITY TO JUST VIEWED PRODUCT
                var events = json;
                events.data.map((val, i) => {
                    if (val.event_name == 'Viewed Product') {
                        console.log(val.event_properties);
                    }
                });
            })
            .catch(err => console.error('error:' + err));
    })
    .catch(err => console.error('error:' + err));