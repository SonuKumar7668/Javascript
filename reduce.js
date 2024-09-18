// let a=[0,3,4,5];
// let b=a.reduce((res,a)=>res*a);
// console.log(b);

// Creating maximum 
let arr=[3,4,5,4,8,4,6,3,7,67];
let max=arr.reduce ((m,el)=>{
    if(m>el){
        return m;
    }else{
    return el;
    }
});
console.log(max);
// Spread 
console.log(...arr);