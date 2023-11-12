function merge(arr1, arr2) {
    let m = arr1.length, n = arr2.length, i = 0, j = 0;
    let out = [];
    
    while(i < m && j < n){
        if (arr1[i] < arr2[j]){
            out.push(arr1[i]);
            i++;
        }else{
            out.push(arr2[j]);
            j++;
        }
    }
    
    while(i < m){
        out.push(arr1[i]);
        i++;
    }
    
    while(j < n){
        out.push(arr2[j]);
        j++;
    }
    
    return out;
}

console.log(merge([1, 4, 7,10],[-2, -2, 0, 8]))

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let c = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0, c)), mergeSort(arr.slice(c)));
}

console.log(mergeSort([0, 10, 5, -10, -9, 6, 11, 1]))

module.exports = { merge, mergeSort};