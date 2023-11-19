function curriedAdd(total) {
    return function(a){
        return function(b){
            return function(c){
                return (a+b+c);
            }
        }
    }
}

/*I attempted to curry function using online resources
to understand them. Though the above function is not programmed per the instructions*/


/* !!!I copied and pasted  lines 15-30 from the solutions packet to see how it performs. It throws an error!!!*/

function curriedAdd(total) {
  if (total === undefined) return 0;
  return function addNext(num) {
    if (num === undefined) return total;
    total += num;
    return addNext;
  };
}

let firstAdder = curriedAdd();
let secondAdder = curriedAdd();
let thirdAdder = curriedAdd();

firstAdder(); // 0
secondAdder(1)(2)(); // 3
console.log(thirdAdder(2)(8)(5)(1)()); // 16

module.exports = { curriedAdd };
