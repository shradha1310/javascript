//Given an array of size N and Q queries of the form S(start index) & e(end index).
//Return the sum of elements from index s to e for all queries.

let A = [-3,6,2,4,5,2,8,-9,3,1]
let B = [[1,3],[2,7],[4,8],[0,2]]
let Q = 4

function sumArray(){
    for(let i = 0; i<B.length; i++){
        let s = B[i][0]
        let e = B[i][1]
        let sum = 0;
        for(let j=s; j<=e; j++) {
            sum = sum + A[j];
        }
        console.log(sum)
    }
}
sumArray()
//Time complexity - O[QN]
//Space complexity - O(1)
