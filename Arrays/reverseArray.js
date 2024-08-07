let array = [3,6,5,2,1,4,7]
//let arrtemp =[]
function reverseArr(arr){
    let i = 0;//0
    let j = arr.length - 1;//6
    while(j > i){
        let temp = arr[j];//3
        arr[i]= arr[j];
        arrtemp = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}
let reverseArrOutput = reverseArr(array);
console.log(reverseArrOutput)