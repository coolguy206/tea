
<!-- KLAVIYO CODE -->

window.addEventListener("klaviyoForms", function (e) {
    console.log('klaviyo form submitted');
    console.log(e);
    if (e.detail.type == "submit") {
        console.log('it is submit type and here is the email');
        console.log(e.detail.metaData["$email"]);

        var klaviyoEmail = e.detail.metaData["$email"];
        var klaviyoSource = 'Klaviyo Popup';
        var url = window.location.href;

        Sailthru.integration("userSignUp", {
            "id": klaviyoEmail,
            "email": klaviyoEmail,
            "lists": {
                "MASTER_CONTACTS_LIST": 1,
                // '20230213_Sweeps_SpreadtheLove': 1
            },
            "vars": {
                "ACQUISITION_SOURCE": klaviyoSource,
                // "first_name": fname,
                // "last_name": lname,
                // "phone": phone
            },
            "source": klaviyoSource,
            "onSuccess": function () {
                // $('.this-form .sending').hide();
                // $('.this-form .successfully-sent').show();

                window.dataLayer.push({
                    'event': 'sailthru',
                    'theUrl': url,
                    'sailthruEmail': klaviyoEmail,
                    'sailthruSource': klaviyoSource
                });

            }
        });


    } else if (e.detail.type == "stepSubmit") {
        console.log('it is stepSubmit type and here is the email');
        console.log(e.detail.metaData.sentIdentifiers["$email"]);

        var klaviyoEmail = e.detail.metaData.sentIdentifiers["$email"];
        var klaviyoSource = 'Klaviyo Popup';
        var url = window.location.href;
        var klaviyoPhone = e.detail.metaData["$phone_number"];

        Sailthru.integration("userSignUp", {
            "id": klaviyoEmail,
            "email": klaviyoEmail,
            "lists": {
                "MASTER_CONTACTS_LIST": 1,
                // '20230213_Sweeps_SpreadtheLove': 1
            },
            "vars": {
                "ACQUISITION_SOURCE": klaviyoSource,
                // "first_name": fname,
                // "last_name": lname,
                "phone": klaviyoPhone
            },
            "source": klaviyoSource,
            "onSuccess": function () {
                // $('.this-form .sending').hide();
                // $('.this-form .successfully-sent').show();

                window.dataLayer.push({
                    'event': 'sailthru',
                    'theUrl': url,
                    'sailthruEmail': klaviyoEmail,
                    'sailthruSource': klaviyoSource
                });

            }
        });


    }
});


