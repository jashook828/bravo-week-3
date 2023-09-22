//map method
//gives us a way to apply a single function to every element in an array
//or to have a function that applies things to some elements of an array
//based on specific criteria


//let names = ["Cody", "Casey", "Clayton", "Kara", "Hope"];

//without map
// function greet(person) {
//   console.log(`Hello ${person}!`);
// }
// for (let person of names) {
//   greet(person);
// }

//with map
// names.map(person => console.log(`Hello ${person}!`));

//only want to greet people with names longer than 4 characters
// names.map((person) => {
//   if (person.length > 4) {
//     console.log(`Hello ${person}!`);
//   }
// })

// let grades = [99.1, 87.5, 56.2, 88.1, 93.9];

// let roundedGrades = grades.map(grade => Math.round(grade));

// console.log(roundedGrades);


/*isPalindrome
const isPalindrome = string => string.replaceAll(' ', '') === string.replaceAll(' ', '').split('').reverse().join('');

let myString = "a man a plan a canal panama";
let myStringSplit = myString.split(''); //splits string at every character and returns them in an array
console.log("myStringSplit before reverse", myStringSplit);


let myStringSplitReverse = myStringSplit.reverse();
console.log(myStringSplitReverse);
console.log("myStringSplit post reverse", myStringSplit);

let myStringSplitReverseJoin = myStringSplitReverse.join('');
console.log(myStringSplitReverseJoin);

console.log(isPalindrome("a man a plan a canal panama"));
*/

// Split into array, capitalize the first letter, join back together

function capitalizeWords(word){
    //split the word into array of characters
    let letters = word.split('');
    //capitalize the first letter, resave in the first spot
    letters[0] = letters[0].toUpperCase('');
    //join the letters back into string and store in variable
    let capWord = letters.join('');
    return capWord;
}

function capitalizeWordMap(words){
    return words.map(word => capitalizeWords(word));
}

//take the first letter , capitalize it, add it to slice of remaining letters
function capitalizeWordsMap2(words){
    return words.map(word.charAt(0).toUpperCase() + words.slice(1));
}

console.log(capitalizeWords('chicken'));
let myWords = ['apple','banana','cherry'];
console.log(capitalizeWordMap(myWords));
