//destructuring
//allows you to 'unpack' values from arrays or properties from objects
//into distinct variables. can make code more readable and manageable
//by avoiding needing to access values with indices or keys every single time

//array destructuring
const fruits = ["apple","banana","cherry","durian","elderberry"]

//traditional way
//const firstFruit = fruits[0];
//const secondFruit = fruits[1];

//with destructuring
const [firstFruit, secondFruit] = fruits;

console.log(firstFruit);

//destructuring with Object
const person = {
    firstName: 'John',
    lastName:   'Doe',
    age:    30
};
const person2 = {
    firstName:  'Sally',
    lastName:   'Something',
    age:    45
};

//traditional way
//const first = person.firstName;
//const last = person.lastName;
//const age = person.age;

//with destructuring
//{originalProperty: newVariable}
const {firstName: first, lastName: last, age: age} = person;

//will address this line later
//const {personsName: {personFirst, personLast,}, personsAge} = person2;

//simulating API data
const user = {
    id: 1,
    name : "John Doe",
    address: {
        street: '123 Main St',
        city:   'Anytown'
    }
};

//without destructuring
console.log(user.name);

const {
    name,
    address: {street, city}
} = user;

console.log(name);
console.log(street);
console.log(city);