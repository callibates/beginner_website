/**
 * Recap Exercise
 * 
 * 1. Create a variable 'currentYear' containing the value of the year we are in now
 * 
 * 2. Create a variable 'birthYear' containing the value of the year you were born
 * 
 * 3. Create a variable 'thisYearAge' which is your birth year subtracted from the current year
 * (this value should be the age you have turned or will turn this year)
 * 
 * 4. Create a conditional that checks the value of 'thisYearAge'.
 *     - If the value is greater than or equal to 20 (>=) then print "You are a teenager no more"
 *     - Otherwise, if the value is less than 20 but greater than 12, print to console "Still a teen for a while longer"
 *     - Otherwise, print "You are not even a teenager yet!"
 * 
 * */

let currentYear = 2022;

let birthYear = 1998;

let thisYearAge = currentYear - birthYear;

if (thisYearAge >= 20) {
    console.log('You are a teenager no more!');
} else if (thisYearAge > 12){
    console.log('Still a tenn for a while longer');
} else {
    console.log('You are not even a teenager yet!');
}

/**
 * LOOPS
 * Exercise 1
 * 
 * 1. Create a loop that prints out a countdown from a given variable 'timerValue'
 * 2. Set 'timerValue' to 10 and check the output
 * 
 * Output should look like this:
 * 10
 * 9
 * 8
 * 7
 * 6
 * 5
 * 4
 * 3
 * 2
 * 1
 */

for (let timerValue = 10; timerValue > 0; timerValue--){
    console.log(timerValue);
}

// OR

let timerValue = 10

while(timerValue > 0){
    console.log(timerValue);
    timerValue--; //OR timerValue -= 1
}

/**
 * FUNCTIONS
 * Exercise 2
 * 
 * 1. Create a function prints out a welcome message, something like "Welcome to you!", name it something like 'printWelcome'
 * 
 * 2. Create a variable called 'isWelcome' which is set to either 'true' or 'false'
 * 
 * 3. Create a conditional that checks if 'isWelcome' is true or false
 *     - If it is true, call the function 'printWelcome()'
 *     - If it is false, print out to console 'It looks like you're not welcome...'
 * 
 */

function printWelcome() {
    console.log("Welcome to you!");
}

let isWelcome = true;

if (isWelcome == true){
    printWelcome();
}else{
    console.log("It looks like you're not welcome...");
}

/**
 * FUNCTIONS WITH PARAMETERS
 * Exercise 3
 * 
 * 1. Create a function 'cubeNum' that takes a number (n) and multiplies it by itself 3 times (n x n x n) and returns the result
 * 
 * 2. Call this function, passing in the number 123, and saving the result to a variable
 * 
 * 3. Print out the result to console
 * 
 */

function cubeNum(n){
    let result = n * n * n;
    return result
}

let myNum = 123;

let myNumCubed = cubeNum(myNum);

console.log(myNumCubed);