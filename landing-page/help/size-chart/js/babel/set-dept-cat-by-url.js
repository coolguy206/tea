"use strict";

module.exports = function (urlpara, elem1) {
  //? function to select the department & category based  url params

  //? Check if the URL has parameters
  var searchParams = new URLSearchParams(window.location.search);

  //? Retrieve the value of the specified parameter
  var paramValue = searchParams.get(urlpara);
  if (paramValue !== null) {
    //? Decode URL-encoded characters
    return decodeURIComponent(paramValue);
  }
  return null; // or handle the case where the parameter isn't present
};
