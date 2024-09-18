let arr=[1,2,3,4,5]
let ar=arr.map((el)=>{
    return el*2
});
let even =arr.filter((e)=>e%2==0)
console.log(even);
console.log(ar);
let c=[2,4].every((e)=>e%2==0)
let s=[3,4,5,6].sum((f)=>f%2==0);
console.log(s);
console.log(c);