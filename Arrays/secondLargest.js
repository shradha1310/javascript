//You are given an integer array A. 
//You have to find the second largest element/value in the array or 
//report that no such element exists.

function secondLargest(A) {
    if (A.length < 2) return -1;
    let firstEle = Number(A[0]);
    let secondEle = null;
    for (let i = 1; i < A.length; i++) {
        let currentElement = Number(A[i])
        if (currentElement > firstEle) {
            secondEle = firstEle;
            firstEle = currentElement;
        }
        else if (currentElement < firstEle && (secondEle === null || currentElement > secondEle)) {
            secondEle = currentElement
        }
    }
    return secondEle !== null ? secondEle : -1;
}
A = [13, 7, 16, 18, 14, 17, 18, 8, 10]
secondLargest(A)

