(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(document).ready(function () {
  var faq = [{
    q: 'How do I become an affiliate of Tea Collection?',
    a: 'You can join the program from the <a href="/affiliate/affiliate-program">Affiliate Program</a> Page.'
  }, {
    q: 'How does the Tea Collection Affiliate Program work?',
    a: 'After you join our program via ShareASale and are accepted as an affiliate of Tea Collection, you can place links via banners, text links and other creative assets on your website. When your visitors click through to the Tea Collection website via these links, that visitor is tracked until they place an order. When an order is placed by such a visitor, the order is associated with your website as the referring source and your ShareASale affiliate account is credited 8% of the entire order. At the end of each month, ShareASale sends you a check for the entire amount of revenue share you have earned in the previous month once you have reached a $50 threshold. Thus, the more visitors you refer to Tea Collection and the more of those visitors who turn into customers of Tea Collection, the more you get paid--and unlike many other websites, you get paid each time that customer places an order within 90 days, not just the first time!'
  }, {
    q: 'Who can become a Tea Collection affiliate?',
    a: 'Any website operator that operates a family friendly website is eligible to join the Tea Collection Affiliate Program, subject to the program\'s <a href="/affiliate/affiliate-program/terms-condition">terms and conditions</a>.'
  }, {
    q: 'Can websites outside of the U.S. become affiliate partners?',
    a: 'Yes, but please be aware that we currently ship UPS to the 50 U.S. states. We cannot ship internationally or to PO Boxes or APO/FPO addresses. If your site caters to customers in the U.S., it\'s a good fit.'
  }, {
    q: 'Are there any fees or costs associated with becoming an affiliate of Tea Collection?',
    a: 'No, there is no charge to join the Tea Collection affiliate program.'
  }, {
    q: 'What commission levels does Tea Collection offer?',
    a: 'Tea Collection offers an 8% commission rate with increased commissions offered for exceptional performance.'
  }, {
    q: 'What is the cookie duration?',
    a: 'Tea Collection cookies last for 30 days. This means that you get credit for any referred client who returns to the site within three months, even if they do so directly.'
  }, {
    q: 'What is the average order size?',
    a: 'Tea Collection\'s average order size is more than $100.'
  },
  /* {
    q: 'What is the average EPC?',
    a: 'Tea Collection\'s average EPC is $70. This means that roughly for every 100 clicks you send to use, you can expect to earn $70.'
  }, */
  {
    q: 'I do not know some of the terminology used here. Where can I learn?',
    a: 'Check out "<a href="https://www.accelerationpartners.com/blog/affiliate-marketing-faqs-for-beginners" target="_blank">General Affiliate Marketing for Beginners</a>" for definitions and answers to basic questions.'
  }, {
    q: 'Does Tea Collection have a dedicated program manager to contact for more questions?',
    a: 'Yes, we are committed to making our affiliates successful; please see our <a href="/affiliate/affiliate-program/contacts">affiliate contact</a> page for support.'
  }, {
    q: 'Are special incentives available for especially high performance affiliates?',
    a: 'Yes, especially high performing affiliates enjoy a higher revenue share and other exclusive benefits. If you are an existing affiliate and believe you qualify, please contact us.'
  }, {
    q: 'Can I place Tea Collection links, banners and other creatives anywhere on my website?',
    a: 'Yes, we recommend you think of the placements that would be most appealing to potential Tea Collection customers and place creatives to promote the highest click-throughs and conversion possible.'
  }, {
    q: 'How many Tea Collection links, banners and other creatives can I place on my website?',
    a: 'There is no limit, and we encourage you to use as many as necessary and appropriate to improve click-throughs and conversion. We have found that a creative banner along with a text link or Tea Collection logo improves effectiveness.'
  }, {
    q: 'Can I use Tea Collection photos and content from the Tea Collection websites?',
    a: 'The entire Tea Collection website and content are protected by copyright. You may use images and content from our websites in the promotion of our products on your own website, however all images must be used in the sale of the product through the affiliate program and attributed to us. If you have a special circumstance that requires the use of any photos, product images or content in a manner that is not consistent with the above, you must contact us for written approval prior to use of any such content.'
  }, {
    q: 'What sales and revenue reports does ShareASale provide?',
    a: 'Each transaction is logged on ShareASale servers, and available for review in detail. ShareASale will provide real-time tracking of your clicks, sales and commissions. Please do not contact Tea Collection for this information as we do not have access to your account. Use the links below to find some of the most useful reports. (These links will only work if you are an approved affiliate.) <ol><li>Daily Traffic & Commission Report: <a href="http://www.shareasale.com/a-dayataglance.cfm" target="_blank">http://www.shareasale.com/a-dayataglance.cfm</a></li><li> Order & Sales History: <a href="http://www.shareasale.com/a-accountactivity.cfm" target="_blank">http://www.shareasale.com/a-accountactivity.cfm</a></li><li>Total Commissions Earned: <a href="http://www.shareasale.com/a-summary.cfm" target="_blank">http://www.shareasale.com/a-summary.cfm</a></li></ol>'
  }, {
    q: 'On what products do I earn a commission as an affiliate?',
    a: 'There are no limitations or restrictions on what Tea Collection products can be sold through our affiliate program, AND there are no limits on the amount of commission you can earn as an affiliate.'
  }, {
    q: 'How do you treat product returns and affiliate sales?',
    a: 'If a customer referred by your site returns or cancels an order for refund, or if credit card charges are reversed due to online credit card fraud, Tea Collection at its discretion can debit your account for any commission earned on that transaction.'
  }, {
    q: 'How often do I get paid from ShareASale?',
    a: 'ShareASale will pay your commissions each month via check or Direct Deposit into a bank account (you choose which option you prefer) on the 20th of each month once your account has reached a credit of $50 before the end of the previous month.'
  }];
  var li = '';
  var answers = '';
  $.each(faq, function (i, val) {
    //make the Questions
    var question = '<li><a href="#q' + i + '">' + val.q + '</a></li>';
    li = li + question;
    var answer = '<a class="offset" id="q' + i + '"></a><div><h3>' + val.q + '</h3>' + val.a + '</div><hr>';
    answers = answers + answer;
  });
  $('.questions ul').append(li);
  $('.answers').append(answers);
});


},{}]},{},[1]);
