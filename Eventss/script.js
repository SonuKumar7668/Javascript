let btn = document.getElementById("btn");
let box = document.querySelector(".box");
let container = document.querySelector(".container");
btn.addEventListener("click",()=>{
    box.innerHTML="<b>Why the fuck did you clicked that </b>"
    box.style.backgroundColor="red";
    // container.style.backgroundColor="blue";
    btn.innerHTML="Changed";
})
btn.addEventListener("contextmenu",()=>{
    box.innerHTML ="I am a box again";
    box.style.backgroundColor="white";
    btn.innerHTML="Change Content";
})
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
//these are the mouse event link.