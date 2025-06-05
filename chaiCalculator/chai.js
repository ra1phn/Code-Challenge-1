const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateChaiIngredients(numberOfCups = 3) {
    return [
        `To make ${numberOfCups} cups of Kenyan Chai, you will need:`,
        `Water: ${numberOfCups * 200}ml`,
        `Milk: ${numberOfCups * 50}ml`,
        `Tea Leaves (Majani): ${numberOfCups} tablespoons`,
        `Sugar (Sukari): ${numberOfCups * 2} teaspoons`,
        `Enjoy your Chai Bora!`
    ];
}

readline.question('Enter the number of cups of chai you want to make: ', (input) => {
    const cups = parseInt(input, 10) || 3;
    console.log(calculateChaiIngredients(cups).join('\n'));
    readline.close();
});