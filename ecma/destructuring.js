/*1. What does the following code return/pring?*/
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // ? prints '8' to the console
console.log(yearNeptuneDiscovered); // ? prints '1846' to the console

/*2. What does the following code return/print?*/
let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // ? prints an object with the last two keys 'yearNeptuneDiscovered' and 'yearMarsDiscovered'

/*3. What does the following code return/print?*/

function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ? Your name is Alejandro and you like purple
getUserData({firstName: "Melissa"}) // ? Your name is Melissa and you like green
getUserData({}) // ? Your name is undefined and you like green

/*ARRAY DESTRUCTURING*/

/*1. What does the following code return/print?*/

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ? prints 'Maya' to the console
console.log(second); // ? prints 'Marisa' to the console
console.log(third); // ? prints 'Chi' to the console

/*2. What does the following code return/print?*/

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // ? "Raindrops on roses"
console.log(whiskers); // ? "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); // ? ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

/*3. What does the following code return/print?*/

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // ? [10, 30, 20]

/*In this exercise, you’ll refactor some ES5 code into ES2015.*/
/*1. Assigning variables to object properties*/

var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b;

/*ES2015*/

let {numbers: {a, b}} = obj;

/*2. Array swap*/

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

/*ES2015*/

[arr[0], arr[1]] = [arr[1], [arr0]];

/*3. Race results*/

/*
Write a function called ***raceResults*** which accepts a single array argument. It should return an object with the keys ***first***, ***second***, ***third***, and ***rest***.

- first: the first element in the array
- second: the second element in the array
- third: the third element in the array
- rest: all other elements in the array

**Write a *one line* function to make this work using**

- An arrow function
- Destructuring
- `Enhanced` object assignment (same key/value shortcut)*/

function raceResults([first, second, third, ...others]){
    return{
        first,
        second,
        third,
        others
    }
}

/*one-liner arrow function*/
let raceResultsLiner = ([index0, index1, index2, ...others]) => ([index0, index1, index2, others]);

