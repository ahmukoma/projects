function insertionSort(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length; j++){
            if (arr[j] < arr[j-1]){
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            }
        }
    }
    
    return arr;
}

console.log(insertionSort([52, -2, 1, 40, 4, 20, 12, 10, 7, 9, -1]))

module.exports = insertionSort;