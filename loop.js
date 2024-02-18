let a =12;
// for(let i=0;i<=100;i++){
//     console.log(a+=i);
// }
if(a %2==0 && a%3==0){
    console.log("divisible");
}
else{
    console.log("not divisible");
}
let obj = {
    name: "sonu",
    role: "programer",
    company: "none",
}

for (const key in obj){
    const element = obj[key];
    console.log(key,element);
}
for (const c of "sonu kumar"){
    console.log(c);
}
