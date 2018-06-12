console.log('Hello from external Javascript');

alert('Welcome to my Website!');
var input = prompt('What is your favorite color?');

if (input === 'blue') {
    alert('Blue is a good choice!');
} else if (input === 'red') {
    alert('Red is my favorite color too!');
} else if (input === 'green') {
    alert('Green like the grass, cool!');
} else {
    alert('Good color choice!');
}

// 3.1
var littleMermaid = prompt('How many days are you renting The Little Mermaid for?');
var brotherBear = prompt('How many days are you renting Brother Bear for?');
var hercules = prompt('How many days are you renting Hercules for?');
var pricePerDay = prompt('What is the price per day for renting movies?');
var total = (littleMermaid*pricePerDay) + (brotherBear*pricePerDay) + (hercules*pricePerDay);
alert('Your total for all the movies rented is ' + total);

// 3.2
var googlePay = prompt('What is the pay per hour rate at Google?');
var amazonPay = prompt('What is the pay per hour rate at Amazon?');
var facebookPay = prompt('What is the pay per hour rate at Facebook?');
var googleHours = prompt('How many hours did you work at Google for the week?');
var amazonHours = prompt('How many hours did you work at Amazon for the week?');
var facebookHours = prompt('How many hours did you work at Facebook this week?');
var totalPay = (googlePay*googleHours) + (amazonPay*amazonHours) + (facebookPay*facebookHours);
alert('Your total pay for the week is ' + totalPay);

// 3.3
var isClassFull = false;
var doesConflict = false;
var question1 = prompt('Is the class your registering for full?');
if (question1 === 'yes') {
    isClassFull = true;
}
var question2 = prompt('Does this class conflict with your current schedule?');
if (question2 === 'yes') {
    doesConflict = true;
}
if (isClassFull || doesConflict) {
    alert('You cannot register for this class')
} else {
    alert('You can register for this class')
}

// 3.4
var isPremiumMember = false;
var boughtMoreThanTwo = false;
var question3 = prompt('Are you a premium member?');
if (question3 === 'yes') {
    isPremiumMember = true;
}
var question4 = prompt('Did you buy more than 2 items?');
if (question4 === 'yes') {
    boughtMoreThanTwo = true;
}
if (isPremiumMember) {
    alert('You qualify for the offer!')
} else {
    if (boughtMoreThanTwo) {
        alert('You qualify for the offer!')
    } else {
        alert('You do not qualify for this offer, sorry')
    }
}