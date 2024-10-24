"use strict";

$(document).ready(function () {
  var faq = [{
    q: "Where is your clothing made?",
    a: "We work with several different factories in Peru, Thailand, Vietnam, Indonesia and China."
  }, {
    q: "Are any of your products made in the USA?",
    a: "All our clothing collections are designed in San Francisco, yet produced all around the world. We have made a few special garments in the USA and will continue to do so."
  }, {
    q: "How do you decide what factories to work with?",
    a: "We embrace social responsibility and fair trade, which are very near to our hearts. All of our Sourcing Partners share these same values and are certified by third-party social compliance auditors. We are careful to work only with reputable manufacturers who follow our high standards of good working conditions and are free of child labor. These requirements are documented and reviewed regularly, and we have zero tolerance for anything unlawful or even slightly questionable."
  }, {
    q: "How long have you worked with these factories?",
    a: "Tea has partnered with several of these factories for over a decade. We\u2019ve built financially sound, long-term, sustainable relationships with them to the point that they are an extension of our Tea family."
  }, {
    q: "How do you make sure the people who actually sew Tea clothing are treated fairly, ethically and responsibly?",
    a: "We visit our factories often and walk around the grounds to see with our own eyes what the conditions are and how the workers are being treated. Of course, we can\u2019t be in every factory all the time, so we are incredibly diligent to ensure that our partners around the globe follow the highest possible standards. We have local agents in each country who work with us as well. They are our eyes and ears and manage the day-to-day happenings in each factory."
  }, {
    q: "Are you Fair Trade USA certified?",
    a: "We are not Fair Trade USA certified, although we do practice Fair Trade with all of our manufacturing partners. Each factory must sign and adhere to a Workplace Code of Conduct contract that outlines fair employment practices, facility safety guidelines and compliance assurance methods. This affirms their commitment to fair and safe labor practices. We uphold and exceed high quality standards that are reflected in every garment we produce. We take pride in knowing that quality and compliance are our primary filters when producing our garments."
  }];
  var liWrap = '';
  $.each(faq, function (i, val) {
    var li = '<li><h3>' + val.q + '</h3><p>' + val.a + '</p></li>';
    liWrap += li;
  });
  $('.faq ul').append(liWrap);
});
//# sourceMappingURL=scripts.js.map
