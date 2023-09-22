//object notation

//car object has three properties to begin with
const car = {
    make: "Toyota",
    model: "Camry",
    year:   2020
};

//add properties
car.mileage = 50000
//update properties
car.mileage = car.mileage + 10000

//nested objects
const movie = {
    title: "Dances With Wolves",
    director: "Kevin Costner",
    year: 1990,
    cast: {
        "Dances With Wolves":   'Kevin Costner'
    }
}
//add a character
movie.cast['Randy'] = "Paul";
//console.log(movie);
//who was the main charater in this movie?
//console.log(movie.cast["Dances With Wolves"]);
//console.log(movie["cast"]["Dances With Wolves"]);

//accessing the properties:
//console.log(`The make of the car is ${car.make}`);
//if the key is a string, must use this syntax:
//console.log(`The model of the car is ${car['model']}`);

//array filter method
//creates a new array of elements that pass a specific test
//given by the provided function

//Filter an array to get only the even or odd numbers
const numbers = [1,2,3,4,5,6,7];

const evenNumbers = numbers.filter(number => number % 2 ===0);
const oddNumbers = numbers.filter(number => number % 2 === 1);

//Filter out negative numbers
const myNumbers = [1,-1,5,-3,0,10];
const nonNegatives = myNumbers.filter(number => number >= 0);

//Filter out words shorter than 4 characters
const words = ['apple', "is", "good", "for", "you"];
const longWords = words.filter(word => word.length >= 4);

//employee Christmas party only 21+ can attend
const employees = [{name: 'Jon', age: 25},
                {name: 'Jane', age: 20},
                {name: "Mike", age: 30},
                {name: "Jill", age: 27},
                {name: "Sam", age: 10}];

const invitedEmployees = employees.filter(employee => employee.age >= 21);
console.log(invitedEmployees);

//use map method to retrieve names
const invitedNames = invitedEmployees.map(employee => employee.name);
console.log(invitedNames);