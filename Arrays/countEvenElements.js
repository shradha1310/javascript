//Given an array of size N & Q queries (s,e) For every query return the count of
//even elements in the index range from sto e

let A = [-3,6,2,4,5,2,8,-9,3,1]
let B = [[1,3],[2,7],[4,8],[0,2]]
let Q = 4

function countEvenElements(){
    for(let i = 0; i<B.length; i++){
        let s = B[i][0];
        let e = B[i][1];
        let count = 0;
        for(let j = s; j<=e; j++){
            if(A[j]%2 == 0){
                count++
            }
        }
        console.log(count)
    }
}
countEvenElements();
//Time complexity - O[QN]
//Space complexity - O(1)