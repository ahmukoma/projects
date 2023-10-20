/** product: calculate the product of an array of numbers. */

function product(nums) {
    if (nums.length === 0) return 1;
    return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
    let curr = words[0].length;
    if(words.length === 1) return curr;
    
    let long = longest(words.slice(1));
    return longest(words.slice(1)) > curr ? long : curr;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
    if (str.length === 0) return "";
    return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
    if (str.length === 1 || str.length === 0) return true;
    return str[0] === str.slice(-1) === isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
    
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
    if (str.length === 0) return "";
    return revString(str.slice(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
    let vals = [];
    
    for(let key in obj){
        if(typeof(obj[key]) === 'object'){
            vals.push(...gatherStrings(obj[key]));
        }else if (typeof(obj[key]) === 'string'){
            vals.push(obj[key])
        }
    }
    
    return vals;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
