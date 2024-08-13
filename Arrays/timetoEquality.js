//Given an integer array A of size N. In one second, you can increase the value 
//of one element by 1.
//Find the minimum time in seconds to make all elements of the array equal.
//First argument is an integer array A.
//Return an integer denoting the minimum time to make all elements equal.

function timeEquality(A){
    let maxElement = A[0]
    let time = 0
    for(let i = 1; i < A.length; i++){
        let currentElement = A[i];
        if(currentElement > maxElement){
            maxElement = currentElement;
        }
        
    }
    for(let i = 0; i < A.length; i++){
        time += maxElement - A[i]
    }
    console.log(time)
}
let A = [2, 5, 3, 6, 4];
timeEquality(A)