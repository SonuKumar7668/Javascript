// for(let a= 1;a<=100;a++){
//     if(a%2==0){
//         console.log(a)
//     }
//     else{
//         continue
//     }
// }
// -----------//
// let n= 4
// let sum =0
// for(let i= 1;i<=n;i++){
//     sum+=i;
// }
// console.log("sum of first ", n , "natural numbers is ", sum)
//------------//
let objc = {
    harry: 88,
    shubh: 45,
    shiv: 56,
    ritik: 98,
}
// for in
for(let a in objc){
    console.log("markd of ", a, "=" , objc[a])
}
// for of
for(let b of "harry"){
    console.log(b)
}