(function () {

    "use strict";

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     */

    function isANumber(num) {
        number % 2 === 0 ? alert('The number is even') : alert('The number is odd');

        var numPlusHundred = parseInt(number) + 100;
        alert('Your number plus 100 is ' + numPlusHundred);

        num < 0 ? alert('Your number is a negative number') : alert('Your number is a positive number');
    }

    var question = confirm('Would you like to enter a number?');

    if (question) {
        var number = prompt('Enter a number');
        isNaN(number) ? alert('You did not enter a number') : isANumber(number);
    }


    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined above, if the color passed is not
     * one of the ones defined above, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */

    function analyzeColor(color) {
        // if (color === 'red') {
        //     return 'Red like a stop sign';
        // } else if (color === 'orange') {
        //     return 'We all like orange juice';
        // } else if (color === 'yellow') {
        //     return 'Go faster when you see a yellow light';
        // } else if (color === 'green') {
        //     return 'The world is full of green';
        // } else if (color === 'blue') {
        //     return 'Blue is the color of our sky';
        // } else if (color === 'indigo') {
        //     return 'Blueberries are indigo, I think?';
        // } else if (color === 'violet') {
        //     return 'Why didn\'t you choose purple';
        // } else {
        //     return 'I don\'t know anything about' + color;
        // }

        switch (color) {
            case 'red':
                return 'Red like a stop sign';

            case 'orange':
                return 'We all like orange juice';

            case 'yellow':
                return 'Go faster when you see a yellow light';

            case 'green':
                return 'The world is full of green';

            case 'blue':
                return 'Blue is the color of our sky';

            case 'indigo':
                return 'Blueberries are indigo, I think?';

            case 'violet':
                return 'Why didn\'t you just choose purple';

            default:
                return 'I don\'t know anything about ' + color;
        }
    }

    // Don't change the next two lines!
    // These lines create two variables for you:
    // - `colors`: a list of the colors of the rainbow
    // - `randomColor`: contains a single random color value from the list (this
    //                  will contain a different color everytime the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message everytime you refresh the page
     */

    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */

    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

    console.log(analyzeColor(prompt('Pick a color')));




    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */

    function calculateTotal(luckyNum, originalPrice) {
        if (luckyNum === 0) {
            return originalPrice;
        } else if (luckyNum === 1) {
            return originalPrice - (originalPrice * .1);
        } else if (luckyNum === 2) {
            return originalPrice - (originalPrice * .25);
        } else if (luckyNum === 3) {
            return originalPrice - (originalPrice * .35);
        } else if (luckyNum === 4) {
            return originalPrice - (originalPrice * .50);
        } else if (luckyNum === 5) {
            return 0;
        }
    }

    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
    // Generate a random number between 0 and 6
    var luckyNumber = Math.floor(Math.random() * 6);

    var bill = prompt('What is your total bill amount?');
    alert('Your lucky number is ' + luckyNumber + '\nYour price before the discount is $' + bill +
        '\nNow your price after the discount is $' + calculateTotal(luckyNumber, bill));

})();