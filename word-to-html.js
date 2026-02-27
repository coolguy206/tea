
var fs = require('fs');
const util = require('util');
const writeFileContent = util.promisify(fs.writeFile);
const mammoth = require("mammoth");

var basePath = `landing-page/policy/privacy-policy/dev/`
var readFilePath = `${basePath}docs/`;
var fileName = `privacy policy as of 02272026_FINAL.docx`;
var docx = `${readFilePath}${fileName}`;

mammoth.convertToHtml({ path: docx })
    .then(function (result) {
        var html = result.value; // The generated HTML
        var messages = result.messages; // Any messages, such as warnings during conversion

        // console.log(html);
        // console.log(messages);

        writeFileContent(`${basePath}word-doc.html`, html).then((data) => {
            console.log(`File written successfully. word-doc.html`);
        }).catch((err) => {
            console.log(err);
        });
    })
    .catch(function (error) {
        console.error(error);
    });



