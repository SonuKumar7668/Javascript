// Chapter 2 Practice set
let age = 13;
// if (age>=10 && age <=20){
//     console.log("your age lies between 10 and 20")
// }
// else{
//     console.log("age don't lie between 10 and 20 ")
// }
switch(age){
    case 12:
        console.log("your age is 12")
        break
    case 13:
        console.log("your are a teenager now")
        break
    default:
        console.log("Your age is not special")
        break
    
}
// Q 3

let a = 2
let b = 3
let x = 6
if(x%2==0 && x%3==0){
    console.log("yes its divisible by a and b")
}
else{
    console.log("its not divisible by a and b")
}
x= 4
let d = x>18? "you can drive" : "you can not drive"
console.log(d)