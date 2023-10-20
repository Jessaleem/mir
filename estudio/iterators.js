
// consumers of iterables

const numbers = [1, 2, 3, 4];
numbers[Symbol.iterator]();

// for ... of cycle
const message1 ='Hi';
for(const char of message1){
  console.log(char);
}

// Spread operator
const message = 'Hi!';
const chars =[...message]
console.log(chars)

//Array Destructuring
const message2 = 'Hi!';
const [firstChar, ...restChars] = message2;

console.log(firstChar);
console.log(restChars);

//Array.form
const message3 = 'Hi!';
const chars2 = Array.from(message3);
console.log(chars2);
