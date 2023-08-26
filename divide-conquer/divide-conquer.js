/*Going to need more practice with this lesson. Though the functions return the expected output, they're no where near how or what was expected*/
/*1. Count zeroes (0)*/

function countZeroes(arr){
    let count = 0;
    arr.map((val, i) => {
        count = val === 0 ? count + 1: count;
    });
    
    return count;
}

/*2. Sorted frequency*/

function sortedFrequency(arr, match){
    let count = 0;
    arr.map((val, i) => {
        count = val === match ? count + 1: count;
    });
    
    return count;
}

/*3. Rotated Index*/

function findRotatedIndex(rotatedArr, int){
        //empty
}

/*4. Find rotation count*/

function findRotationCount(){
    //empty
}

/*5. Find floor*/

function findFloor(arr, val){
    let init = 0;
    let fin = arr.length - 1;
    let floor = -1;
    
    while (init <= fin){
        let ci = Math.floor((init + fin)/2);
        let center = arr[ci];
        if (center < val){
            init = ci + 1;
        }else if (center > val){
            fin = ci - 1;
        }else{
            floor = ci;
            return ci;
        }
        
        floor = arr[fin];
    }
    
    return floor ? floor : -1;
}