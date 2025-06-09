const readline = require("readline"); // Import the built-in readline module to allow user input from the terminal.

// Creates interface for reading input and displaying output in terminal.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function estimateTransactionFee(amountToSend) {
    const transactionCost = 0.015 * amountToSend;
    const totalAmount = amountToSend + transactionCost;

    if (transactionCost < 10) {
        return [
            `Sending KES ${amountToSend}:`,
            `Minimum Transaction Fee Applied: KES 10`,
            `Total amount to be debited: KES ${amountToSend + 10}`
        ];
    } else if (transactionCost > 70) {
        return [
            `Sending KES ${amountToSend}:`,
            `Maximum Transaction Fee Applied: KES 70`,
            `Total amount to be debited: KES ${amountToSend + 70}`
        ];
    }

    return [
        `Sending KES ${amountToSend}:`,
        `Calculated Transaction Fee: KES ${transactionCost.toFixed(2)}`,
        `Total amount to be debited: KES ${totalAmount.toFixed(2)}`
    ];
}

rl.question('Unatuma Ngapi?: ', (input) => {
    const amountToSend = parseFloat(input);
    if (isNaN(amountToSend)) {
        console.log("Tafadhali andika namba halali.");
        rl.close();
        return;
    }

    console.log(estimateTransactionFee(amountToSend).join('\n'));
    rl.close();
});