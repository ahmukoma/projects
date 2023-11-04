function merge(arr1, arr2) {
    let m = arr1.length, n = arr2.length;
    let i = 0, j = 0;
    let sorted = [];
    
    while(i < m && j < n){
        if (arr1[i] < arr2[j]){
            sorted.push(arr1[i]);
            i++;
        }else{
            sorted.push(arr2[j]);
            j++;
        }
    }
    
    while(i < m){
        sorted.push(arr1[i]);
        i++;
    }
    
    while(j < n){
        sorted.push(arr2[j]);
        j++;
    }
    
    return sorted;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let c = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0, c)), mergeSort(arr.slice(c)));
}

module.exports = { merge, mergeSort};