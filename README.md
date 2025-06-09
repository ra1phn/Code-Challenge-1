# Code-Challenge-1

## Chai Ingredients Project

This challenge involves creating a simple calculator to determine the basic ingredients needed to make a specific number of cups of Kenyan chai.

#### The Standard Recipe for 1 Cup of Chai:
* Water: 200 ml  
* Milk: 50 ml  
* Tea Leaves (Majani): 1 tablespoon  
* Sugar (Sukari): 2 teaspoons (optional, but included for this challenge)

#### What I did:
I wrote a JavaScript function named `calculateChaiIngreditents` that:
1. **Prompts the user** to enter number of cups they want to make. 
2. Takes `numberOfCups` as an argument (number). 
3. **Calculates** the required amount for each ingredient based on the argument.
4. **Prints the results** to the console in a clear, readable format.

#### Example Interaction:
* **User is prompted:** `Karibu! How many cups of Chai Bora would you like to make?`
* **User enters:** `7`
* **Console Output:**  
  > To make 7 cups of Kenyan Chai, you will need:  
  > Water: 1400 ml  
  > Milk: 350 ml  
  > Tea Leaves (Majani): 7 tablespoons  
  > Sugar (Sukari): 14 teaspoons  
  >  
  > Enjoy your Chai Bora!

---

# Code-Challenge-2

## Boda Boda Fare Estimator

This challenge involves creating a simple calculator to estimate the total fare for a boda boda ride based on distance.

#### Fare Calculation Rules:
* **Base Fare:** KES 50 (applied to every ride)  
* **Per Kilometer Charge:** KES 15 for every kilometer traveled

#### What I did:
I wrote a JavaScript function named `calculateBodaFare` that:
1. **Prompts the user** to enter the distance of their trip in kilometers.
2. Takes `distanceInKm` as an argument (number).
3. **Calculates** the total fare using the formula:  
   `totalFare = baseFare + (distanceInKm * chargePerKm)`
4. **Prints the result** to the console in a user-friendly format.

#### Example Interaction:
* **User is prompted:** `Unafika wapi Mkubwa? Kilometer ngapi?:`
* **User enters:** `12`
* **Console Output:**  
  > Uko kwote? Io ni 12 km:  
  > Ukikalia Pikipiki: KES 50  
  > Mpaka Uko: KES 180  
  > Total: KES 230  
  >  
  > Panda Pikipiki!

---

# Code-Challenge-3

## Simplified Mobile Money Transaction Fee Estimator

This challenge is to create a simplified estimator for mobile money transaction fees based on a 1.5% fee rate, with minimum and maximum fee limits.

#### Fee Structure:
* Basic transaction fee is 1.5% of the transaction amount.
* Minimum fee: KES 10 (if 1.5% of amount is less than 10, fee is 10).
* Maximum fee: KES 70 (if 1.5% of amount is more than 70, fee is 70).

#### What I did:
I wrote a JavaScript function named `estimateTransactionFee` that:
1. **Prompts the user** to enter the amount of money to send.
2. Takes `amountToSend` as an argument (number).
3. **Calculates** the transaction fee based on the 1.5% rule and enforces minimum and maximum limits.
4. Calculates the total amount to be debited (amount + fee).
5. **Prints the results** to the console.

#### Example Interactions:

---

**Scenario 1: Minimum Fee Applied**  
* **User is prompted:** `Unatuma Ngapi? (KES):`  
* **User enters:** `600`  
* **Console Output:**  
  > Sending KES 600:  
  > Calculated Transaction Fee: KES 10  
  > Total amount to be debited: KES 610  
  >  
  > Send Money Securely!

---

**Scenario 2: Standard Fee**  
* **User is prompted:** `Unatuma Ngapi? (KES):`  
* **User enters:** `4000`  
* **Console Output:**  
  > Sending KES 4000:  
  > Calculated Transaction Fee: KES 60  
  > Total amount to be debited: KES 4060  
  >  
  > Send Money Securely!

---

**Scenario 3: Maximum Fee Applied**  
* **User is prompted:** `Unatuma Ngapi? (KES):`  
* **User enters:** `8000`  
* **Console Output:**  
  > Sending KES 8000:  
  > Calculated Transaction Fee: KES 70  
  > Total amount to be debited: KES 8070  
  > 
  > Send Money Securely!
