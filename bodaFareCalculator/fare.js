const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateBodaFare(distanceInKm){
    const baseFare = 50;
    const chargePerKm = 15;
    const totalFare = baseFare + (distanceInKm * chargePerKm);

    return [
        `Uko kwote? Io ni ${distanceInKm} km:`,
        `Ukikalia Pikipiki: KES ${baseFare}`,
        `Mpaka Huko: KES ${distanceInKm * chargePerKm}`,
        `Total: KES ${totalFare}`,
        `Panda Pikipiki!`
    ];
}

readline.question('Unafika wapi Mkubwa? Kilometer ngapi?' ,(input) => {
    const kms = parseInt(input, 10);
    console.log(calculateBodaFare(kms).join('\n'));
    readline.close();
});