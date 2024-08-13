//Given an array A of size N. You need to find the sum of Maximum and Minimum element in the given array.

function sum (A){
    if(A.length === 0) return null;
    let maxElement = Number(A[0]) // lets assume that A[0] is the max element
    let minElement = Number(A[0]) // lets assume that A[0] is the min element
    for(let i = 1; i<A.length; i++){
        const currentElement = A[i];
        if(currentElement > maxElement){
            maxElement = currentElement
        }
        else if(currentElement < minElement){
            minElement = currentElement
        }
    }
    return maxElement + minElement
    
}
let arr = [3,-3,6,8,4,7,8,-2,0]
sum(arr)