'use strict';

(function () {

    var i = 2;
    while (i <= 65536) {
        console.log(i);
        i *= 2;
    }

    // This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;

    do {
        var conesSold = Math.floor(Math.random() * 5) + 1;

        if (conesSold <= allCones) {
            console.log(conesSold + ' cones sold');
            allCones -= conesSold;
        } else if (conesSold === 0) {
            console.log('Yay! I sold them all')
        } else {
            console.log('Cannot sell you ' + conesSold + ' i only have ' + allCones);
        }

    } while (allCones !== 0);

})();