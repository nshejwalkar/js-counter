// set initial count
let count = 0;

// get the value and buttons
let value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");


btns.forEach(myFunction); //forEach applies a function on every thing in the list

function myFunction(btn) {
    btn.addEventListener("click", callBack) //check for click, if so do this function
}

function callBack(e) {
    const list = e.currentTarget.classList;
    if (list.contains("decrease")) {
        count -= 1;
    }
    if (list.contains("reset")) {
        count = 0;
    }
    if (list.contains("increase")) {
        count += 1;
    }
    value.textContent = count;
    if (count>0) {value.style.color = "green"}
    if (count===0) {value.style.color = "black"}
    if (count<0) {value.style.color = "red"}
}

