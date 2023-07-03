/*1. es5 map callback*/
function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}

/*ES2015*/
function double(arr){
    return arr.map((val) => {
        return val * 2;
    })
}

/*2. replace all functions*/

function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}

/*ES2015*/

let mySquareAbdFindEvens = numbers => numbers.map(num => num * num).filter(evens => evens % 2 === 0);