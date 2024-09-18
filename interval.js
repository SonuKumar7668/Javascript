console.log("Hello ");
let id=setInterval(()=>{
    console.log("Sonu Kumar");
},1000)
console.log("World");
setTimeout(()=>{
    clearInterval(id)
},5000)
