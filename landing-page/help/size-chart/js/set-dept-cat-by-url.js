module.exports = function (urlpara, elem1) {
  //? function to select the department & category based  url params

  //? Check if the URL has parameters
  const searchParams = new URLSearchParams(window.location.search);

  //? Retrieve the value of the specified parameter
  const paramValue = searchParams.get(urlpara);

  if (paramValue !== null) {
    //? Decode URL-encoded characters
    return decodeURIComponent(paramValue);
  }
  
  return null; // or handle the case where the parameter isn't present

  /*
  //? onload check if parameters in url for department and category
  var urlParam = window.location.href;

  //? check if parameters if there are then split them into an array
  if (urlParam.indexOf('?') !== -1) {

    var paramArr = urlParam.split('?');

    //? split the parameters into an array
    paramArr = paramArr[1].split('&');

    //? loop through the array to find selectedDept & selectedCat then return the values and stop the loop
    for (let val of paramArr) {

      var param = val.split('=');
      //? this finds the selectedDept and selectedCat url parameter
      // console.log(param[0], param[1], urlpara);

      if (param[0] == urlpara) {

        var deptCat = param[1];
        //? if 20% in variable change to ' '
        deptCat = String(deptCat.replace(/%20/g, ' '));

        return deptCat;

      }

    }

  }
*/
};