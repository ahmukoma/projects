/*1*/
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}

/*ES2015*/

function filterOutOdds(){
    return Array.from(arguments).filter((val, i) => {
        return val % 2 === 0;
    })
}

/*2*/
/*Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.*/

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1

function findMin(){
    let arr = Array.from(arguments);
    return Math.min(...arr);
}

/*3. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.*/

function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2};
}

/*4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.*/

function doubleAndReturnArgs(firstArr){
    let newArr = Array.from(arguments).map((v) => {
        return v * 2;
    });
    
    newArr.splice(0, 1); //removes NAN from index 0
    return [...firstArr, ...newArr];
}

/*------------------5. Slice and Dice-------------------*/

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    const randInd = Math.floor(Math.random() * items.length);
    let newArr = new Array(items);
    newArr.splice(randInd, 1);
    return [...newArr];
}

let removeARandom = (items) => {
    const randInd = Math.floor(Math.random() * items.length);
    let newArr = new Array(items);
    newArr.splice(randInd, 1);
    return [...newArr];
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return new Array(...array1, ...array2);
}

let extendArray = (a1, a2) => {
    return new Array(...a1, ...a2);
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    let newObj = new Object(obj);
    return {
        ...newObj,
        [key]: val
    }
}

let addKeyValArrow = (obj, key, val) => {
    let newObj = new Object(obj);
    return {...newObj, [key]: val}
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj = new Object(obj);
    delete newObj[key];
    return {...newObj};
}

let removeKeyArrow = (obj, key) => {
    let newObj = new Object(obj);
    delete newObj[key];
    return {...newObj};
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    let newObj = new Object({...obj1, ...obj2});
    return newObj;
}

let combinedObjects = (obj1, obj2) => {
    let newObj = new Object({...obj1, ...obj2});
    return newObj;
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    let myObj = new Object(...obj);
    myObj[key] = val;
    return myObj;
}

let updateObj = (obj, key, val) => {
    let myObj = new Object(...obj);
    myObj[key] = val;
    return myObj;
}