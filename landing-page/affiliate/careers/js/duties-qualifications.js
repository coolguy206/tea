
export var dutiesQualifications = function(job, str){
    var duties = job;
    var dutiesLi = ``;
    var dutiesTitle = `<h3>${str}</h3>`;
    $(duties).each(function (j, arr) {
      if(arr.header !== undefined){
        var list = `<li><h4>${arr.header}</h4></li>`;
        $(arr.list).each(function (k, duty) {
          list = `${list}\n\n<li>${duty}</li>\n`;
        });
        dutiesLi = dutiesLi + list;
      } else {
        var list = `<li>${arr}</li>`;
        dutiesLi = dutiesLi + list;
      }
      
    });

    // console.log(dutiesLi);

    var dutiesList = `<ul>${dutiesLi}</ul>`;
    var dutiesContent = dutiesTitle + dutiesList;
    $('.the-job').append(dutiesContent);
};


