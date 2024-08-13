//Given an array A and an integer B, find the number of occurrences of B in A.

function linearSearch(A,B){
    let count = 0;
    for(let i = 0; i<=A.length;i++){
        if(A[i]==B){
            count++
        }
    }
    console.log("count",count)
}
A = [1, 2, 2,7,9,6,7,7,7,7], B = 7 
linearSearch(A,B)