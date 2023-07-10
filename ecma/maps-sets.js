new Set([1,1,2,2,3,4]);

/*1. What does the following code return?*/

    /* The set above returns [1, 2, 3, 4] */

/*2. What does the following code return?*/

    [...new Set("referee")].join("");

    /* The set above returns 'ref' */

/* 3. What does the Map m look like after running the following code? */

    let m = new Map();
    m.set([1,2,3], true);
    m.set([1,2,3], false);

    /*It looks like an array that has a shared key and not-necessarily shared values*/

/* 4. Write a function that tests for duplicates in an array */

function hasDuplicate(arr){
    return !(new Set(arr).size === arr.length);
}

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

/* 4. Write a function called vowelCount, returns a map where the keys are ?numbers? and the values are the count of the vowels in the string. */

function vowelCount(str){
    const vowels = 'aeiou';
    
    let myVowelMap = new Map();
    for(let char of str){
        char = char.toLowerCase();
        if (vowels.indexOf(char) > -1){
            if (!myVowelMap.get(char)){
                myVowelMap.set(char, 1);
            }else{
                myVowelMap.set(char, myVowelMap.get(char) + 1);
            }
        }
    }
    
    return myVowelMap;
}

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }