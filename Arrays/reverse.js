//Given an array A of N integers and also given two integers B and C. 
//Reverse the elements of the array A within the given inclusive range [B, C].

let A = [1, 2, 3, 4]
let B = 2
let C = 3

function reverseArrRange(arr,s,e){
    let i = s;
    let j = e;
    while(i<j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}
let reverseArrRangeOutput = reverseArrRange(A,B,C);
console.log(reverseArrRangeOutput)