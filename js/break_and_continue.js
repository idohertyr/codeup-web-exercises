'use strict';

(function () {


    function printNumbers(num) {
        console.log('Number to skip is ' + num);
        for (var i = 0; i <= 50; i++) {
            if (i === num) {
                console.log('Yikes! Skipping number: ' + i);
                continue;
            }

            if (i % 2 !== 0) {
                console.log('Here is an odd number: ' + i);
            }
        }
    }


    var num = prompt('Enter an odd number between 1 - 50');
    num = parseInt(num);

    if (num > 1 && num < 50 && num !== 0) {
        printNumbers(num);
    } else {
        while (!isNaN(num)) {
            num = prompt('Try again. Enter an odd number between 1 - 50');
            if (num > 1 && num < 50) {
                if (num % 2 !== 0) {
                    break;
                } else {
                    num = prompt('Try again. Enter an odd number between 1 - 50');
                }
            }
        }
        printNumbers(num)
    }

})();