// initialize count as 0
// listen for clicks on increment button
// increment the count variable when the button is clicked
// change the count-el in the html to reflect the count.


let grMessage = document.getElementById("message");
let name = "Kiran Pisal"
let greeting = "Welcome back, "
grMessage.textContent= greeting + name + "👋"

let count = 0;
let countEl = document.getElementById("count-el");
function increment(){
    count = count + 1;
    countEl.textContent=count;

}

function decrement(){
    count = count - 1;
    countEl.textContent = count;
}

let saveEl = document.getElementById("save-el")
 function save(){
    let saveCount = count + " - "
    saveEl.textContent += saveCount
    countEl.textContent = 0;
    count = 0;
    
}
