const readline = require("readline"); // Import the built-in readline module to allow user input from the terminal.

// Creates interface for reading input and displaying output in terminal.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to estimate transaction fee based on the amount to send
function estimateTransactionFee(amountToSend) {
    const transactionCost = 0.015 * amountToSend; // 1.5% transaction fee
    const totalAmount = amountToSend + transactionCost; // Total amount including fee

    // If calculated fee is less than 10 apply minimum fee
    if (transactionCost < 10) {
        return [
            `Sending KES ${amountToSend}:`,
            `Minimum Transaction Fee Applied: KES 10`,
            `Total amount to be debited: KES ${amountToSend + 10}`
        ];
    // If calculated fee is more than 70 apply max fee of 70
    } else if (transactionCost > 70) {
        return [
            `Sending KES ${amountToSend}:`,
            `Maximum Transaction Fee Applied: KES 70`,
            `Total amount to be debited: KES ${amountToSend + 70}`
        ];
    }

    // Otherwise, use the calculated fee
    return [
        `Sending KES ${amountToSend}:`,
        `Calculated Transaction Fee: KES ${transactionCost.toFixed(2)}`,
        `Total amount to be debited: KES ${totalAmount.toFixed(2)}`
    ];
}

// Prompt user for the amount to send
rl.question('Unatuma Ngapi?: ', (input) => {
    const amountToSend = parseFloat(input); // Parse user input to a number
    if (isNaN(amountToSend)) { // Validate input
        console.log("Tafadhali andika namba halali."); // Inform user of invalid input
        rl.close();
        return;
    }

    // Output the fee estimation
    console.log(estimateTransactionFee(amountToSend).join('\n'));
    rl.close(); // Close the readline interface
});