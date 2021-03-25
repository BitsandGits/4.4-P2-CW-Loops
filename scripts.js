// START OF DEMO (CLASSWORK IS BELOW)
/**
 * 1
 * Write a function that takes a string parameter and prints every single character of the string 
 */
const printString = (str) => {
    for(let char of str){
        console.log(char);
    }
}
printString("loops are awesome")

/**
 * 2
 * Write a function that takes a string parameter and counts the number of 'a' in the string
 */
const howManyLetterA = (str) => {
    let count = 0; 
    for (let char of str){
        if (char === "a"){
            count++;
        }
    }
    return count;
}
console.log(howManyLetterA("apples are amazing")) // 4

/**
 * 3
 * How many words are in a camelcased string?
 */
const howManyWords = (str) => {
    let count = 1;
    for (let char of str){
        if (char === char.toUpperCase()){
            count++;
        }        
    }
    return count;
}
console.log(howManyWords("helloMyNameIsBob")) // 5


// START OF CLASSWORK
// 1. Write a function that takes in a number and prints out each number till n (the number inputted). Stop the loop when the index is 5.
let printNumTill5 = (num) => {
    for (i = 0; i<5 && i<num; i++){
        console.log(i);
    }
}
printNumTill5(3); // 0 1 2 


// 2. Write some code that console.log's the message "Do I have to repeat myself?" 1000 times. Use a loop but make sure not to get stuck in an infinite loop!
let repeatMyself = () => {
    for (i=0; i<1000; i++){
        console.log("Do I have to repeat myself?");
    }
}
// not going to test this one LOL


// 3. Write a function called numOfChar that takes a string and returns the number of characters of the string.
let numOfChar = (str) => {
    console.log(str.length);
}
numOfChar("Hello World!"); // 12


// 4. Write a function called count that takes a parameter n which is a whole number greater than or equal to 1.  When executed, count should console.log the whole numbers from 1 to n.
let count = (n) => {
    for (i=1; i<=n; i++) {
        console.log(i);
    }
}
count(6); // prints 1 through 6 


// 5. Write a function that takes in a string and prints out each letter on a new line. If the string is empty or is a number, leave the loop.
let printLetter = (str) => {
    for (let char of str){
        console.log(char);
    }
}
printLetter("Hello World!"); // this works 
// note: let char in str prints out index #s! 


// 6. Write a function called countEven that takes a parameter n which is a whole number greater than or equal to 2.  When executed, countEven should console.log the even numbers from 2 to n.
let countEven = (n) => {
    for (i = 2; i <= n; i++){
        if (i % 2 == 0){
            console.log(i);
        }
    }
}
countEven(10); // prints 2 4 6 8 10 


//::::::BONUS::::::
// 7. Write a function called toCase that takes a string and returns that string to both lowercase and uppercase.
let toCase = (str) => {
    str1 = str.toLowerCase();
    str2 = str.toUpperCase();
    console.log(str1);
    console.log(str2);
}
toCase("Hello World!"); // hello world! HELLO WORLD! 


// 8. Write a function called countOdd that takes a parameter n which is an odd whole number greater than or equal to 1.  When executed, countOdd should console.log the odd numbers from 1 to n.
let countOdd = (n) => {
    for (i = 1; i <= n; i++){
        if (i % 2 == 1){
            console.log(i);
        }
    }
}
countOdd(11); // 1 3 5 7 9 11 


// 9. A pangram is a string that contains every letter of the alphabet. Write a function that takes in a string parameter and returns true if the string is a pangram, otherwise return false. Ignore case, i.e., 'T' is the same as 't'. Also note that some edge cases are not accounted for, such as a pangram with extra letters will return true. 
let alphabet = "abcdefghijklmnopqrstuvwxyz";
const isPangram = (str) => {
    str = str.toLowerCase();
    for (let char of alphabet){
        if (str.includes(char) == false){
            return false;
        }
    }
    return true;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog')) // true
console.log(isPangram('The quick brown fox jumps over the lazy dogsssssss')) // true 
console.log(isPangram('I am not a pangram')) // false 
console.log(isPangram('We promptly judged antique ivory buckles for the next prize')) // true
console.log(isPangram('We promptly judged antique ivory buckles for the prize')) // false  