h=document.querySelector("h1");
box=document.querySelector("#box");
h.style.color="green";
box.style.backgroundColor="red";
setInterval(()=>{
    box.style.backgroundColor="blue"
},3000)