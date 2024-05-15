/* //## Exercise 1.1 Create function following below :</br>

add(a, b)</br>
subtract(a, b)</br>
multiply(a, b)</br>
divide(a, b)</br>

## Exercise 1.2 Create Function Inform---</br>

console.log("Hi, my name is " + firstName + "I live in " + location + "and enjoy "+hobby); */


const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const a = 10;
const b = 5;

console.log(add(a,b));
console.log(subtract(a,b));
console.log(multiply(a,b));
console.log(divide(a,b));

const inform = (firstName, location, hobby) => {
    console.log("Hi, my name is " + firstName + " I live in " + location + " and enjoy "+hobby);
}

inform('Wiriya', 'BKK', 'play game');

