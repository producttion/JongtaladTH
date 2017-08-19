$(document).ready(function () {
    var blog1 = $('#blog1');
    var blog2 = $('#blog2');
    var blog3 = $('#blog3');
    var blog4 = $('#blog4');
    var numA1 = 1;
    var numA8 = 8;
    var numA9 = 9;
    var numA15 = 15;
    var numB1 = 1;
    var numB6 = 6;
    var numB7 = 7;
    var numB11 = 11;



    $(document).ready(function () {
        var endBox1 = setInterval(function () {
            if (numA1 == numA8) {
                clearInterval(endBox1);
            }
            blog1.append(`
            <div class="blogH ">
            <input  onClick="clickCheck()" type="button" value="A`+numA1+`" class="button button1">
             </div>
             `);
            var newList = $('#blog1');
            newList.fadeIn();
            numA1 = numA1 + 1;
        }, 0);

        var endBox2 = setInterval(function () {
            if (numA9 == numA15) {
                clearInterval(endBox2);
            }
            blog2.append(`
            <div class="blogW">
            <input onClick="clickCheck()" type="button" value="A`+numA9+`" class="button button2">
            </div>
            `);
            var newList = $('#blog2');
            newList.fadeIn();
            numA9 = numA9 + 1;
        }, 0);

        var endBox3 = setInterval(function () {
            if (numB1 == numB6) {
                clearInterval(endBox3);
            }
            blog3.append(`
            <div class="blogH">
            <input  onClick="clickCheck()" type="button" value="B`+numB1+`" class="button button1">
             </div>
             `);
            var newList = $('#blog3');
            newList.fadeIn();
            numB1 = numB1 + 1;
        }, 0);

        var endBox4 = setInterval(function () {
            if (numB7 == numB11) {
                clearInterval(endBox4);
            }
            blog4.append(`
            <div class="blogW">
            <input onClick="clickCheck()" type="button" value="A`+numB7+`" class="button button2">
            </div>
            `);
            var newList = $('#blog4');
            newList.fadeIn();
            numB7 = numB7 + 1;
        }, 0);




    });

});