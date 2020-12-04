//use  strict mood we use to avoid bugs into our code
"use strict";

let hasDriversLicense = false;

const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive.");

//functions: A piece of code that we can reuse in our code over & over again like variable but it consist of many lines

//simple function
function logger() {
  //function body
  console.log("My name is Qandeel");
}
//to use the above function we simply write like this 👇🏽
logger(); //this is also called invoking,running or calling a function

//A function can also recieve a data and also return an output
//think like a function is a machine 📠
function fruitProcessor(apples, oranges) {
  //apples and oranges are the parameters and you can pass the values to it
  console.log(apples, oranges);
  const juice = `Juice with ${apples} and juice with ${oranges} oranges`;
  //return is the result of the code that written above
  return juice; //recieve a value
}
//changing the values will be passed into the function and give the output as needed
const fruitJuice = fruitProcessor(5, 3); //capture/put in somewhere
console.log(fruitJuice);

//function declaration vs. expressions
//function declaration
function birthYearOne(birthYear) {
  //birthyear is the parameter
  //   const age = 2020 - birthYear;
  //   return age;
  //instead of the above ☝🏽 syntax you can also do this:
  return 2020 - birthYear;
}
const nowAge = birthYearOne(1995);
console.log(nowAge);
//arguments is the value that we use here as a place holder that is the parameter. e.g 1995 is the argument

//function without a name: Anonymous function
//function expression
const birthYearTwo = function (birthYear) {
  return 2020 - birthYear;
};
const newAge = birthYearTwo(1986);
console.log(newAge);
