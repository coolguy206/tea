jQuery(document).ready(function () {

    const ac = "catalog_optout";

    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    //submit the form
    $('.sailthru').submit(function (e) {
        e.preventDefault();

        //remove all errors
        $('.sailthru .the-error').remove();

        //make sure a state is selected
        var states = $('#states').val();
        if (states == 'Please Select*') {
            var err = '<div class="the-error"><label></label><span class="error">Please Select a State</span></div>';
            $('#states').closest('div').before(err);
        } else {

            //vars
            var companyId = `RAd6JR`;
            var list = `WspXGk`;
            var email = $('.sailthru input[name="email"]').val();
            var fname = $('.sailthru input[name="FIRST_NAME"]').val();
            var lname = $('.sailthru input[name="LAST_NAME"]').val();
            var address1 = $('.sailthru input[name="POSTAL_STREET_1_"]').val();
            var address2 = $('.sailthru input[name="POSTAL_STREET_2_"]').val();
            var city = $('.sailthru input[name="CITY_"]').val();
            var state = $('.sailthru select[name="STATE_"]').val();
            var zip = $('.sailthru input[name="POSTAL_CODE_"]').val();

            //hide form & show processing
            $('.sailthru').hide();
            $('.processing').show();

            var valid = emailIsValid(email);

            if (valid) {
                var theData = {
                    data: {
                        type: 'profile',
                        attributes: {
                            // custom_source: ac,
                            email: email,
                            first_name: fname,
                            last_name: lname,
                            location: {
                                address1: address1,
                                address2: address2,
                                city: city,
                                country: "United States",
                                region: state,
                                zip: zip
                            },
                            properties: {
                                catalog_optout: 'y'
                            },

                        }
                    }
                }

                console.log(theData);
                theData = JSON.stringify(theData);

                $.ajax({
                    url: `https://a.klaviyo.com/client/profiles/?company_id=${companyId}`,
                    type: 'post',
                    data: theData,
                    headers: {
                        revision: '2023-07-15',
                        'content-type': 'application/json'
                    },
                    success: function (data, status, xhr) {
                        console.log('klaviyo success register');
                        // jQuery(document).trigger('klaviyoSuccess', data);
                        $('.catalog-wrap .success').show();
                        $('.sailthru').show();
                        $('.processing').hide();
                        $('span.error').hide();

                        //clear field
                        $('.sailthru input[name="FIRST_NAME"]').val('');
                        $('.sailthru input[name="LAST_NAME"]').val('');
                        $('.sailthru input[name="POSTAL_STREET_1_"]').val('');
                        $('.sailthru input[name="POSTAL_STREET_2_"]').val('');
                        $('.sailthru input[name="CITY_"]').val('');
                        $('.sailthru input[name="POSTAL_CODE_"]').val('');
                    }
                });

            } else {
                console.log(`email not valid`);
                $('.sailthru').show();
                $('.processing').hide();
                $('span.error').show();
                $('input#email').focus();
            }

        }
    });

    //#states change
    $('#states').change(function (e) {
        var states = $('#states').val();
        if (states !== 'Please Select*') {
            //remove all errors
            $('.sailthru .the-error').remove();
        }
    });
});