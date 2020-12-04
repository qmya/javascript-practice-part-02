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
