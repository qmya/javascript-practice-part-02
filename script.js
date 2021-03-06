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

//Arrays condition
if (newFriends.includes("Peter")) {
  console.log("You have a friend called Peter");
}

// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

const calculateTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const arrTip = [
  calculateTip(bills[0]),
  calculateTip(bills[1]),
  calculateTip(bills[2]),
];

console.log(arrTip);

//total = bills+tips
const total = [
  bills[0] + arrTip[0],
  bills[1] + arrTip[1],
  bills[2] + arrTip[2],
];
console.log(total);

//Introduction to OBJECTS
const qandeel = {
  firstName: "Qandeel",
  lastName: "Mya",
  age: 2020 - 1995,
  job: "Web developer",
  friends: ["Michael", "Jay", "Peter"],
};
console.log(qandeel.name);
console.log(qandeel);
console.log(qandeel.lastName);
console.log(qandeel["lastName"]);

const nameKey = "Name";
console.log(qandeel["first" + nameKey]);
console.log(qandeel["last" + nameKey]);

console.log(qandeel.firstName + qandeel.lastName);

const interestedIn = prompt(
  "What do you want to know about Qandeel? Choose between firstName, lastName, age,job and friends"
);
console.log(qandeel[interestedIn]);

//adding new elements to the objects
qandeel.name = qandeel.firstName + " " + qandeel.lastName;
qandeel.location = "Canada";
console.log(qandeel);

//Challenge
//write this sentence in dynamic way
//"Qandeel has 3 friends , and her best friend is called Michael";

const sentence = `${qandeel.firstName} + has ${qandeel.friends.length} ${friends}, + and her best friend is called ${qandeel.friends[0]}`;
console.log(sentence);

//Objects methods

const newQandeel = {
  firstName: "Qandeel",
  lastName: "Mya",
  birthYear: 1995,
  job: "Web developer",
  friends: ["Michael", "Jay", "Peter"],
  hasDriversLicense: true,
  //   calculateAge: function (birthYear) {
  //     return 2037 - birthYear;
  calculateAge: function () {
    console.log(this); //this is the whole qandeel object
    //creating a new property in the object
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};

console.log(newQandeel.calculateAge());
console.log(newQandeel["calculateAge"](1995));
console.log(newQandeel);

//Challenge
const jonas = {
  firstName: "Jonas",
  birthYear: 1991,
  job: "teacher",
  hasDriversLicense: true,
  jonasAge: function () {
    console.log(this);
    this.age = 2020 - this.birthYear;
    console.log(this.age);
    return this.age;
  },
};

const aboutJonas = `${jonas.firstName} is a ${jonas.jonasAge()}-year old ${
  jonas.job
}, and he has ${jonas.hasDriversLicense ? "a " : "no"} driver license`;
console.log(aboutJonas);

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

//Mark object
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.markBMI = this.mass / this.height ** 2;
    return this.markBMI;
  },
};

//john object
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.johnBMI = this.mass / this.height ** 2;
    return this.johnBMI;
  },
};
john.calcBMI();
mark.calcBMI();
console.log(john.johnBMI, mark.markBMI);

if (john.johnBMI > mark.markBMI) {
  console.log(
    `${john.fullName} is higher (${john.calcBMI()}) than ${
      mark.fullName
    } (${mark.calcBMI()})`
  );
} else if (john.johnBMI < mark.markBMI) {
  console.log(
    `${mark.fullName} is higher (${mark.calcBMI()}) than ${
      john.fullName
    } (${john.calcBMI()})`
  );
}

//Loops: best way to write DRY using loop
//Loop statement has 3 parts
//1. intial value
//2. how much you want to repeat
//3. Update the counter after each iterations ++
// for loops keeps running while the condition is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋🏼‍♀️`);
}

//Looping Arrays , Breaking and continuing

const newJonas = [
  "Jonas",
  "Josh",
  2020 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const types = [];

for (let i = 0; i < newJonas.length; i++) {
  //reading the typeof newjonas array
  console.log(newJonas[i], typeof newJonas[i]);
  //filling an array
  types[i] = typeof newJonas[i];
  //another way to fill an array
  types.push(typeof newJonas[i]);
}
console.log(types);

//example
const yearBorn = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < yearBorn.length; i++) {
  console.log(2037 - years[i]);
  ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break

for (let i = 0; i < newJonas.length; i++) {
  if (typeof newJonas !== "string") continue;
  else if (typeof newJonas == "string") {
    break;
  }
}

//Looping Backwards and Loops in Loops

const newPurdalArray = [];
const purdal = ["Purdal", "kakakhel", 2037 - 1990];
//2,1,0
for (let i = purdal.length - 1; i >= 0; i--) {
  console.log(purdal[i]);
  newPurdalArray.push(purdal[i]);
  console.log(i);
}
console.log(purdal, newPurdalArray);

//Loop inside a Loop
//So we are doing 3 different excercises today in the gym

for (let excercise = 1; excercise < 4; excercise++) {
  console.log(`-------Starting excercise ${excercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${excercise}: Lifting weight ${rep} 🏋🏼‍♀️`);
  }
}

//The While loop
//same parts needed as for loop
//just need condition to run
//when you dont know how much will the code run togive ypu the specific answer we use while loop
let rep = 1;
while (rep <= 10) {
  console.log("running until 10");
  rep++;
}

//while example
//Math.trunc removes the decimal afterpoints
//math.random gives you number 0 or 1
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end");
}

// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const newBill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const newTipArr = [];
const newTotals = [];

const calculatingTips = function (newBill) {
  return newBill > 50 && newBill < 300 ? newBill * 0.15 : newBill * 0.2;
  console.log(calculatingTips);
};

for (let i = 0; i < newBill.length; i++) {
  console.log(`so the tip ${i}`);
  const tip = calculatingTips(newBill[i]);
  newTipArr.push(tip);
  console.log(newTipArr);
  newTotals.push(tip + newBill[i]);
  console.log(newTotals);
}
console.log(newTipArr);
console.log(newTotals);

const calculateAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum / arr.length;
};
calculateAverage();
calculateAverage([2, 3, 6]);
const tipArrAverage = calculateAverage(newTipArr);
console.log(tipArrAverage);

const totalsArrAverage = calculateAverage(newTotals);
