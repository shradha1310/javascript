//Given an array A and an integer B. A pair(i, j) in the array is a good pair if i != j and (A[i] + A[j] == B).
//Check if any good pair exist or not.

let arr = [1,2,3,4]
let output = 100

function goodPair(){
    let pair = false;
    for (let i = 0; i < arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i]+arr[j] == output){
                pair = true;
                console.log("pair",pair)
                //return true;
                
            }
            
        }
    }
    console.log("pair",pair)
    //return false;
}
goodPair()