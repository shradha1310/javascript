//Given an array of size N. Count  the number of elements which have atleast one element greater than 
//themselves in the array

const arr = [2, 5, 1, 4, 8, 0, 8, 1, 3, 8];
let max = arr[0];
let count = 0;

function countMax (){
    for (let i = 0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    for (let i = 0; i<arr.length; i++){
        if(arr[i] < max){
           count++
        }
    }
    return count;
}
countMax()
