
$(document).ready(function () {

    var faq = [{
        q: 'Does Tea clothing tend to run large or small?',
        a: '<p>Tea clothes run true to size, though every child is different. We’ve found our <a href="/help/size-chart">size chart</a> is a great way to estimate what size to order.</p>',
        section: 'general'
    },
    {
        q: 'What’s the best way to wash Tea clothing?',
        a: '<p>We always recommend following the washing instructions on the label of the Tea garment. Many of our clothes are 100% cotton, which we suggest washing in cold water with a low tumble dry setting. All of our clothes are pre-washed and pre-shrunk.</p><p><b>Please note:</b>We advise against using any detergents or stain removers that contain Oxiclean. The active agent in Oxiclean (Sodium Percarbonate) interacts with textiles, acting like a bleaching agent by removing dye. Time, sun exposure, and heat will further exacerbate the bleaching effect causing color loss and holes.</p>',
        section: 'general'
    },
    {
        q: 'Do you ship internationally?',
        a: '<p>Yes! Please see our <a href="/order/shipping-info" target="_blank">shipping page</a> for more information on international shipments. Tea also offers standard shipping to the 50 US States and territories, and we ship our own products (but not 3rd party brands) to Canada. Here is a list of <a href="/shop-locations" target="_blank">stores</a> in a few other countries.</p>',
        section: 'general'
    },
    {
        q: 'The item I want is sold out. How will I know if it’s on backorder?',
        a: '<p>We generally do not reorder items once they sell out. If we do have any backorders coming in for an item, it will be specified in the item description. If you can’t locate the item you’re looking for on our website, try one of our <a href="/shop-locations">retail stores</a>.</p>',
        section: 'general'
    },
    {
        q: 'What if my question isn’t answered here?',
        a: '<p>Please check the other sections in our help pages to see if your question is answered in another section. You are always welcome to call us at <a href="tel:8663748747">866.374.8747</a> , Monday through Friday from 6am-5pm PT. You can also email us anytime at <a href="mailto:service@teacollection.com">service@teacollection.com</a>.</p>',
        section: 'general'
    },
    {
        q: 'What is Tea’s Price Adjustment policy?',
        a: '<p>Tea Collection is happy to provide a one-time price adjustment on items you’ve purchased if you see the item on our site offered for a lower price within 10 days of placing your order. We’ll completely refund the price difference to your original form of payment if we’re contacted within 2 days of your order date. A Tea Collection credit for the price difference will be issued if we’re contacted within 3-10 days. Please contact us at <a href="tel:8663748747">866.374.8747</a> or email us at <a href="mailto:service@teacollection.com">service@teacollection.com</a>. Our Tea representatives are ready to assist you Monday through Friday 6am-5pm PT.</p>',
        section: 'us-policies'
    },
    {
        q: 'Can I cancel or edit my order once it’s been placed?',
        a: '<p>At Tea, we work quickly to ensure you receive your order as soon as possible. Our systems are fully automated, which means that after you place your order it is sent to our warehouse to be packed and shipped. Although this is great news when you’re waiting for your order to arrive, it unfortunately means that we can’t add, change or cancel orders once they’ve been placed. If you have any questions, please call us at <a href="tel:8663748747">866.374.8747</a> , Monday through Friday 6am-5pm PT.</p>',
        section: 'us-policies'
    },
    {
        q: 'Does Tea ship to Canada?',
        a: '<p>Yes! Tea now ships directly to Canada.</p>',
        section: 'ca-policies'
    },
    {
        q: 'How do I find my size?',
        a: 'All sizing is in U.S. sizes. Please see our <a href="/help/size-chart">size charts</a>.',
        section: 'ca-policies'
    },
    {
        q: 'When will my Canadian order arrive?',
        a: 'The shipping time frame depends on where you live in Canada. Your order will typically ship within 2 business days of date you place your order. Depending on your ship method, it can take another 3-14 business days for your order to arrive. Please note: International shipments may be subject to cross-border inspections by customs authorities.',
        section: 'ca-policies'
    },
    {
        q: 'What payment methods can I use for Canadian orders?',
        a: '<p>We accept:</p><ul><li>Visa, MasterCard, Discover and American Express</li><li>PayPal</li><li>Tea Collection store credit</li></ul><p>Orders are subject to verification and acceptance before shipping. Credit cards will be charged when the items are shipped.</p>',
        section: 'ca-policies'
    },
    {
        q: 'What currency will be displayed?',
        a: '<p>We currently show all products on our site in US Dollars (USD), and orders are charged in USD as well. Your final total (including shipping fees) will be displayed in USD at checkout. You may be subject to international or currency exchange fees, depending on the terms and conditions of your credit card provider.</p>',
        section: 'ca-poicies'
    },
    {
        q: 'How are duties and taxes collected?',
        a: '<p>Items shipped to Canada are subject to import custom duties and taxes (“import fees”). The recipient of the shipment is the importer of record and is responsible for import fees assessed.</p><p>Items shipped via standard shipping (Canada Post) enter Canada through CBSA screening centers, are inspected by CBSA Officers and assessed for applicable customs duties, taxes and charges. If duties and/or taxes are owed, items will be delivered along with the E14 Customs Invoice indicating the amount that the addressee must pay before the package can be released to them. Canada Post collects the fees on behalf of the CBSA and accepts the following methods of payment:</p><ul><li>Cash</li><li>Certified Check or Uncertified Business Check</li><li>Credit Card (Visa, MasterCard or American Express)</li><li>Commercial Account</li></ul><p>Items shipped via FedEx follow the same screening process as items shipped via standard shipping. Once FedEx takes possession of the order, the customer is contacted via phone with the total cost of duties and taxes. Fees can be paid over the phone or directly to the FedEx delivery driver via the following methods:</p><ul><li>Cash</li><li>Personal Check</li><li>Credit Card (Visa, MasterCard or American Express)</li></ul><p>Items shipped via either method to very remote locations may be delivered by a third party agent designated by the shipper and are subject to other duty and tax collection methods/standards. Please contact Canada Post or FedEx directly for additional questions.</p>',
        section: 'ca-policies'
    },
    {
        q: 'How are duties and taxes calculated?',
        a: '<p>Duty rates are determined by the classification of a good, which varies by country of origin and country of destination. Tax rates are driven by the classification of a good and the tax laws of the destination province. Taxes typically range between 15-20% of the order total, but may vary. One resource for estimating duties and taxes can be found below:</p><p><a href="https://www.crossbordershopping.ca/calculators/canadian-duty-calculator" target="_blank">https://www.crossbordershopping.ca/calculators/canadian-duty-calculator</a></p><p>Please note this site is not affiliated with Tea Collection and is only provided for reference</p>',
        section: 'ca-policies'
    },
    {
        q: 'Are there duty and tax exemptions?',
        a: '<p>Orders with item prices totaling $20 CAD or less are duty- and tax-free. This means that you will not be charged duties and taxes via the shipper if the total is $20 CAD or less. Select items are tax-exempt in specific provinces. If your item is tax exempt, you will not be required to pay duties and taxes to the shipper.</p>',
        section: 'ca-policies'
    },
    {
        q: 'Is every item eligible for Canadian shipping?',
        a: '<p>At this time, we are only able to ship products actually manufactured by Tea Collection to Canada. We are not able to ship 3rd party branded items across the border. There are also a few long sleeve layette (newborn) styles that do not meet Canadian standards regarding fit at this time. These styles are flagged on the site as “not shippable to Canada.”</p><p>Items that cannot be shipped to Canada will be removed from your shopping cart when you select a Canadian ship-to address, and you will not be charged for these items.</p>',
        section: 'ca-policies'
    },
    {
        q: 'Promotions',
        a: `<p>Orders shipped to international addresses are eligible to participate in Tea Collection promotions, except where prohibited by law or otherwise indicated.</p>
				
				<p>For more details on Tea promotional offers please visit our <a href="/here-to-help/promotions-coupons">coupons and promotions</a> page.</p>`,
        section: 'ca-policies'
    },
    {
        q: 'What is your price adjustment policy for orders shipped to Canada?',
        a: '<p>At this time, we are unable to make any price adjustments on orders shipping to Canada due to systems and customs requirements.</p>',
        section: 'ca-policies'
    },
    {
        q: 'Can I cancel or edit my order once it’s been placed?',
        a: '<p>At Tea, we work quickly to ensure you receive your order as soon as possible. Our systems are fully automated, which means that after you place your order it is sent directly to our warehouse to be packed and shipped. Although this is great news when you’re waiting for your order to arrive, it unfortunately means that we can’t add, change or cancel orders once they’ve been placed. If you have any questions, please call us at <a href="tel:8663748747">866.374.8747</a> Monday through Friday 6am-5pm PT.</p>',
        section: 'ca-policies'
    },
    {
        q: 'Can I return or exchange my Canadian order?',
        a: '<p>Due to systems and customs restrictions, we are unable to process returns or exchanges for Canadian orders.</p>',
        section: 'ca-policies'
    },

    ];

    var generalQ = '';
    var usPoliciesQ = '';
    var caPoliciesQ = '';

    var generalA = '';
    var usPoliciesA = '';
    var caPoliciesA = '';

    $.each(faq, function (i, val) {
        //make the questions
        var question = '<li><a href="#q' + i + '">' + val.q + '</a></li>';
        if (val.section == 'general') {
            generalQ = generalQ + question;
        } else if (val.section == 'us-policies') {
            usPoliciesQ = usPoliciesQ + question;
        } else if (val.section == 'ca-policies') {
            caPoliciesQ = caPoliciesQ + question;
        }

        //make the answers
        var answer = '<a class="offset" id="q' + i + '"></a><div><h3>' + val.q + '</h3>' + val.a + '</div><hr>';
        if (val.section == 'general') {
            generalA = generalA + answer;
        } else if (val.section == 'us-policies') {
            usPoliciesA = usPoliciesA + answer;
        } else if (val.section == 'ca-policies') {
            caPoliciesA = caPoliciesA + answer;
        }
    });

    //output questions
    $('.questions .general').append(generalQ);
    $('.questions .us-policies').append(usPoliciesQ);
    $('.questions .ca-policies').append(caPoliciesQ);

    //output answers
    $('.answers .general').append(generalA);
    $('.answers .us-policies').append(usPoliciesA);
    $('.answers .ca-policies').append(caPoliciesA);
});
