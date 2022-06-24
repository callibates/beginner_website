/**
 * Variables
 */

//string
let firstName = "Calli";

//number
let age = 24;

//boolean
let isRainingOutside = false;

console.log("this is something I am printing");

console.log(firstName);

console.log(age);

console.log("My name is "+firstName);

/**
 * Exercise 1
 * 
 * 1. Create variables to represent each of the following:
 *     - A string containing your name
 *     - A number containing your favourite number
 *     - A boolean containing whether or not you like pineapple on pizza
 * 
 * 2. Print them out to the console matching this format:
 * 
 *     My name is Calli.
 *     My favourite number is 137.
 *     It is false that I enjoy pineapple on pizza.
 */

let sum = 2 + 2;

let doubleAge = age * 2;

let doubleAgePlusSum = sum + doubleAge;

console.log(doubleAge);


/**
 * Exercise 2
 * 
 * 1. Create 2 variables to represent:
 *    - The number of minutes in an hour, call it "minsPerHour"
 *    - The number of hours in a day, call it "hoursPerDay"
 * 
 * 2. Create a variable "minsPerDay" that saves the value of the number of minutes in an hour multiplied by the number of hours in a day
 *    Print that value to console as: "There are _____ minutes in a day"
 * 
 * 3. Multiply "minsPerDay" by 7 and save it into a new variable "minsPerWeek"
 *    Print this value to console as: "There are ______ minutes in a week"
 * 
 * 4. Divide "minsPerWeek" by "minsPerHour", and save this into a value "hoursPerWeek"
 *    Print this value to console as: "Finally, there are ______ hours in a week"
 */

let minsPerHour = 60;

let hoursPerDay = 24;

let minsPerDay = minsPerHour * hoursPerDay;

console.log("There are "+minsPerDay+" minutes in a day");

let minsPerWeek = minsPerDay * 7;

console.log("There are "+minsPerWeek+" minutes in a week");

let hoursPerWeek = minsPerWeek / minsPerHour;

console.log("Finally, there are "+hoursPerWeek+" hours in a week");

if (isRainingOutside) {
    console.log("It is raining outside");
}
else {
    console.log("It is not raining outside");
}

/**
 * Exercise 3
 * 
 * 1. Create a variable storing the name of your favourite ice cream flavour
 * 
 * 2. Create a conditional to provide the following feedback based on your favourite ice cream flavour
 *    - If your favourite ice cream flavour is 'chocolate', print to console: "What a great flavour!"
 *    - Otherwise, if your favourite flavour is 'vanilla', print to console: "Oh...okay then..."
 *    - Otherwise, print to console: "________, well thats a new one!" (where _______ is the flavour you picked)
 * 
 */

let favFlavour = 'mint choc chip'

if (favFlavour == 'chocolate'){
    console.log("What a great flavour!");
} else if (favFlavour == 'vanilla') {
    console.log("Oh...okay then...");
} else {
    console.log(favFlavour+", well thats a new one!");

}

