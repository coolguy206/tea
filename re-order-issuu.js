const fs = require('fs');
const filePath = `landing-page/about/catalogs/dev/li.html`;

const reOrderIssuu = () => {
    fs.readFile(filePath, 'utf8', function (err, data) {

        // Display the file content
        // console.log(data);

        //? CONVERT DATA STRING TO ARRAY
        var arr = data.split('\n\n');

        var mexicoSummer = {};
        var mexicoSpring = {};

        //? LOOP AND FIND MEXICO SUMMER AND MEXICO SPRING
        arr.map((val, i) => {
            // console.log(val);
            if (val.indexOf(`summer23-digest-issuu`) !== -1) {
                mexicoSummer.pos = i;
                mexicoSummer.html = val;
            }

            if (val.indexOf(`spring2-23-catalog-issuu`) !== -1) {
                //? SET POSITION -1 BECAUSE TO ADD ITEM IN FRONT LATER
                mexicoSpring.pos = i - 1;
                mexicoSpring.html = val;
            }
        });

        // console.log(`mexicoSummer:`);
        // console.log(mexicoSummer);
        // console.log(`mexicoSpring:`);
        // console.log(mexicoSpring);

        //? REMOVE MEXICO SUMMER FROM ARR
        arr.splice(mexicoSummer.pos, 1);

        //? ADD MEXICO SUMMER IN FRONT OF MEXICO SPRING
        arr.splice(mexicoSpring.pos, 0, mexicoSummer.html);

        // arr.map((val, i) => {
        //     console.log(val);
        // })

        //? CREATE NEW VAR TO PASS TO WRITEFILE
        var li = ``;

        arr.map((val, i) => {
            // console.log(val);
            li = `${li}\n${val}\n`;
        })

        // console.log(li);

        //? WRITE THE FILE
        fs.writeFile(filePath, li, (err) => {
            if (err)
                console.log(err);
            else {
                console.log(`li.html successfully re-ordered`);
            }
        });


    });
};

exports.reOrderIssuu = reOrderIssuu;