//Given an integer array A of size N and an integer K, 
//you have to return the same array after rotating it K times towards the right.

let arr = [10, 9, 57, 70, 50, 100, 20]
let k = 3;

function reverseArr(arr,i,j){
    while (i < j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr

}
function rotateArray(arr,k){
    let n = arr.length;
    k = k % n; // In case k is greater than n

    // Step 1: Reverse the entire array
    reverseArr(arr, 0, n-1);

    // Step 2: Reverse the first k elements
    reverseArr(arr, 0, k-1);

    // Step 3: Reverse the remaining n-k elements
    reverseArr(arr,k,n-1)
    return arr;
}
console.log(rotateArray(arr,k))