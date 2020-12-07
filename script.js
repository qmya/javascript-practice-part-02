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

//Arrow function
const birthYear3 = (birthYear) => 2020 - birthYear;
const age3 = birthYear3(1995);
console.log(age3);

//Arrow function example:1
const yearsLeftToRetirement = (retirementYear) => retirementYear - 2020;

const yearsToRetire = yearsLeftToRetirement(2025);
console.log(yearsToRetire);

////Arrow function example:2 on age
// const yearsUntilRetirement = (birthYear, name) => {
//   const age = 2020 - birthYear;
//   console.log(age);
//   const retirment = 65 - age;
//   //   return retirment;
//   return `${name} will retire in ${retirment} years`;
// };
// const retirementYearsLeft = yearsUntilRetirement(1995, "Qandeel");
// retirementYearsLeft = yearsUntilRetirement(1986, "Purdal");
// console.log(yearsUntilRetirement(1995, "Qandeel"));
// console.log(yearsUntilRetirement(1986, "Purdal"));

// use arrow function for one line of code
//use normal function for more line of code

function yearsLeftToWork(birthYear) {
  return 2020 - birthYear;
}
yearsLeftToWork(1995);
yearsLeftToWork(1986);
//Reviewing Function
const yearsUntilRetirement = function (name, birthYear) {
  let retirment = 65 - yearsLeftToWork(birthYear);
  retirment = 65 - yearsLeftToWork(birthYear);
  return `${name} will retire in ${retirment} years`;
};
console.log(yearsUntilRetirement("Qandeel", 1995));
console.log(yearsUntilRetirement("Purdal", 1986));

// Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams*/
const calcAverage = (a, b, c) => (a + b + c) / 3;

//Test 01
const dolphinAvg = calcAverage(44, 23, 71);
const koalasAvg = calcAverage(65, 54, 49);
console.log(dolphinAvg);
console.log(koalasAvg);

//3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".

function checkWinner(dolphinAvg, koalasAvg) {
  if (dolphinAvg >= 2 * koalasAvg) {
    console.log("🐬 is the 🏆");
  } else if (dolphinAvg * 2 <= koalasAvg) {
    console.log("🐨 is the 🏆");
  } else if (dolphinAvg === koalasAvg) {
    console.log("DRAW");
  } else {
    console.log("no one wins");
  }
}
checkWinner(46, 56);

//Introduction to Arrays
//Data structure
//big container to save

const friends = ["Michael", "Steven", "Peter"];

console.log(friends);

console.log(friends[1], friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
//wanna change/mutate the array
//you canot change the whole array but you can change the value
friends[1] = "Purdal";
console.log(friends);

//different way to denote array

const years = new Array(1991, 1993, 1994, 2000);
console.log(years);

const firstName = "Qandeel";
const job = "Web developer";
const me = [firstName, 2020 - 1995, "job", friends];
console.log(me);

//Exercise

const calculateAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsOfBirth = [1990, 1967, 2002, 2010, 2018];
console.log(calculateAge(yearsOfBirth[0]));
console.log(calculateAge(yearsOfBirth[3]));
console.log(calculateAge(yearsOfBirth[4]));

//Javascript Array methods
const newFriends = ["Michael", "Steven", "Peter"];
const newLength = newFriends.push("Pinkman");
console.log(newLength);
console.log(newFriends);

//Adding element to the start of an array
newFriends.unshift("Walter White");
console.log(newFriends);

//Remove last elements of an array
//Pop
console.log(newFriends.pop());
console.log(newFriends);

//shift
//remove the first element of an array
console.log(newFriends.shift());
console.log(newFriends);

//finding the index of an element in an Array
console.log(newFriends.indexOf("Steven"));
//if there is no element e.g
console.log(newFriends.indexOf("bob")); //gives -1
//similar method that is more modern than indexOf
//includes which will give true if the element is there and false if not

console.log(newFriends.includes("Steven"));
console.log(newFriends.includes("bob"));
