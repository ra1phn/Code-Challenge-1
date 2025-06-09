// Creates interface for reading input and displaying output in terminal.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate chai ingredients based on the number of cups
function calculateChaiIngredients(numberOfCups = 3) {
    return [
        `To make ${numberOfCups} cups of Kenyan Chai, you will need:`,
        `Water: ${numberOfCups * 200}ml`, // 200ml water per cup
        `Milk: ${numberOfCups * 50}ml`,   // 50ml milk per cup
        `Tea Leaves (Majani): ${numberOfCups} tablespoons`, // 1 tablespoon per cup
        `Sugar (Sukari): ${numberOfCups * 2} teaspoons`,    // 2 teaspoons per cup
        `Enjoy your Chai Bora!`
    ];
}

// Prompt user for the number of cups of chai to make
readline.question('Enter the number of cups of chai you want to make: ', (input) => {
    const cups = parseInt(input, 10) || 3; // Parse input or default to 3 cups
    console.log(calculateChaiIngredients(cups).join('\n')); // Output the ingredients
    readline.close(); // Close the readline interface
});