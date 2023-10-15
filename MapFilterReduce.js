let arr =[34,56,76]
// console.log(arr)
// Array Map method;
let but = arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value + index
})
console.log(but)
//Array filter method
let arr2 =[34,56,76,8,5,3]
let a2= arr2.filter((a)=>{
    return(a<10)
}) 
console.log(a2)
//Array reduce Method
let arr3=[1,2,3,4,5]
let newarr =arr3.reduce((a,b)=>{
    return a+b;
})
console.log(newarr)