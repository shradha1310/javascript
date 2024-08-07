let counter = document.querySelector('#counter');

let incrementBtn = document.querySelector('#incrementBtn');
let decrementBtn = document.querySelector('#decrementBtn');
let reset = document.querySelector('#reset');
let incrementBy = document.querySelector('#incrementBy');

incrementBtn.addEventListener("click",()=>{
    let currentValue = parseInt(counter.innerText)
    let incrementNumber = parseInt(incrementBy.value);
    let answer = currentValue + incrementNumber
    counter.innerText = answer
})

decrementBtn.addEventListener("click",()=>{
    let currentValue = parseInt(counter.innerText)
    let decrementNumber = parseInt(incrementBy.value);
    let answer = currentValue - decrementNumber
    if(answer < 0){
        answer = 0
    }
    counter.innerText = answer

})

reset.addEventListener("click",()=>{
    let currentValue = parseInt(counter.innerText)
    counter.innerText = 0
    incrementBy.value = 1
})
