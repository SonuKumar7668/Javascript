function average(x,y){
    console.log("Loading...")
    return (x+y)/2
}
const hello=()=>{
    console.log("hello how are you?")
    return "hii"
}
const sum=(p,q)=>{
    return p+q;
}
let v=hello();
console.log(v)
let a=1;
let b=2;
let c=3;
console.log("addition then divided by 2", average(a,b));
console.log("addition then divided by 2", average(b,c));
console.log("addition then divided by 2", average(c,a));
// ----------
// Another Method.
console.log(sum(4,6))