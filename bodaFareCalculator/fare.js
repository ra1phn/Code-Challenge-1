// Creates interface for reading input and displaying output in terminal.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate boda boda fare based on distance in kilometers
function calculateBodaFare(distanceInKm){
    const baseFare = 50; // Base fare in KES
    const chargePerKm = 15; // Charge per kilometer in KES
    const totalFare = baseFare + (distanceInKm * chargePerKm); // Total fare calculation

    // Return fare breakdown as an array of strings
    return [
        `Uko kwote? Io ni ${distanceInKm} km:`,
        `Ukikalia Pikipiki: KES ${baseFare}`,
        `Mpaka Huko: KES ${distanceInKm * chargePerKm}`,
        `Total: KES ${totalFare}`,
        `Panda Pikipiki!`
    ];
}

// Prompt user for distance in kilometers
readline.question('Unafika wapi Mkubwa? Kilometer ngapi?' ,(input) => {
    const kms = parseInt(input, 10); // Parse user input to integer
    console.log(calculateBodaFare(kms).join('\n')); // Output fare breakdown
    readline.close(); // Close the readline interface
});