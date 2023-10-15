// let num = [1,2,3,4,5,6,7,8,9]
// let num2 = [10,11,12,13,14,15,16,17,18,19]
// let num3 = [110,111,112,113,114,115,116,117,118,119]
// delete num[0]
// console.log(num)
// console.log(num.length)
// let newarray = num.concat(num2,num3)
// console.log(newarray)
// // sort method
let compare =(a,b)=>{
    return a-b;
}
let decending=(a,b)=>{
    return b-a;
}
let value = [33,66,11,88,44,7]
value.sort(compare)
console.log(value)
value.sort(decending)
console.log(value)
// splice and slice
value.splice(1,2,34,35)
console.log(value)
let newnum = value.slice(2,5)
console.log(newnum)