// Every index i stores the sum of all elements from index 0 to index i
// sum from index s to e = PS[e] - P[s-1]

//Range Sum Query

let A = [-3,6,2,4,5,2,8,-9,3,1] //[-2,4,1,5,2] [-2,6,-3,4,-2] -2+6-3 -3+4-2
let B = [[1,3],[2,7],[4,8],[0,2]]
let Q = 4
let s;
let e;

function rangeSumArray(){
    let prefixSumArr = [];
    let result = [];

    for(let i = 0; i< A.length; i++){
        if(i == 0){
            prefixSumArr[0] = A[0]
        }
        else {
            prefixSumArr[i] = prefixSumArr[i-1] + A[i]
        }
    }
    console.log(prefixSumArr)
    for (let i = 0; i<B.length; i++){
        s = B[i][0];
        e = B[i][1];
        if(s==0){
            result.push(prefixSumArr[e])
        }
        else {
            result.push(prefixSumArr[e] - prefixSumArr[s-1])
        }
    }
    return result
}
rangeSumArray()
//Time complexity - O[Q+N]
//Space complexity - O(N)
