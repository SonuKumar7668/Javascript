let num = [3,55,14]
num.forEach((element)=>{
    console.log(element*element)
})
// for(let i=0;i<num.length;i++){
//     console.log(foreach(num[i]))
// }
let you='sonu'
let arr = Array.from(you)
console.log(arr)
for(let i of num){
    console.log(i)
}
for(let i in num){
    console.log(i)
    console.log(arr)
}