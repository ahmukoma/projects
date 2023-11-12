function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i; j++){
            if (arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    
    return arr;
}

console.log(bubbleSort([-5, 4, -3, 20, 12, 13, 12, 10, -1, 7, 9]));

module.exports = bubbleSort;