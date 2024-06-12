console.log("Sonu");
let sonu = document.getElementsByClassName("box");
console.log(sonu);

sonu[1].style.backgroundColor = "red";
// document.getElementById("redbox").style.backgroundColor = "red";
// document.querySelector(".box").style.backgroundColor = "green";
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "blue";
})