async function greet(){
    throw "Some random error";
    console.log("Hello");
}
let a=greet();
console.log(a);
a
.then(()=>{
    console.log("pass");
})
.catch(()=>{
    console.log("fail");
})