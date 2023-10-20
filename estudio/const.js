// console.log(firstName);
// console.log(nombre)
// console.log(nombre2)

// var firstName = "Lucy";
// const nombre = "Jess";
// let nombre2 = "Paola"

// myFunction();

// console.log(carName);

// function myFunction() {
//   carName= "volvo";
// }

const numbers = [1, 2, 3, 4];
numbers[Symbol.iterator]();

const message = 'Hi!';
const chars =[...message]
console.log(chars)