'use strict';

(function () {

    // Multiplication table
    function showMultiplicationTable(num) {
        for (var i = 0; i <= 10; ++i) {
            console.log(num + ' x ' + i + ' = ' + parseInt(num*i));
        }
    }
    console.log(showMultiplicationTable(prompt('Enter a number')));

    // Even or odd
    for (var i = 0; i < 10; ++i) {
        var randNum = Math.floor(Math.random() * 200) + 20;
        randNum % 2 === 0 ? console.log(randNum + ' is even') : console.log(randNum + ' is odd');
    }

    // Pyramid of numbers 1-9
    for (var x = 0; x < 10; x++) {
        var output = '';
        for (var j = 1; j <= x; j++) {
            output += x;
        }
        console.log(output);
    }

    // Print 100 decremented by 5
    for (var y = 100; y > 0; y -= 5) {
        console.log(y);
    }



})();
