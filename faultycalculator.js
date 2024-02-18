let a =Math.random();
let b=a*100;
let x=100;
let y=15;
console.log(b);
console.log("Choose any option");
console.log("1. for addition ");
console.log("2. for subtraction ");
console.log("3. for multiplication ");
console.log("4. for division ");
let n=2;
switch(n){
    case 1:
        if(b<=10){
            console.log("addition of "+x+" and "+ y+" is "+(x-y));
        }
        else{
            console.log("addition of "+x+" and "+ y+" is "+(x+y));
        }
    break;
    case 2:
        if(b<=10){
            console.log("subtraction of "+x+" and "+ y+" is "+(x/y));
        }
        else{
            console.log("subtraction of "+x+" and "+ y+" is "+(x-y));
        }
    break;
    case 3:
        if(b<=10){
            console.log("multiplication of "+x+" and "+ y+" is "+(x-y));
        }
        else{
            console.log("Multiplication of "+x+" and "+ y+" is "+(x*y));
        }
    break;
    case 4:
        if(b<=10){
            console.log("division of "+x+" and "+ y+" is "+(x**y));
        }
        else{
            console.log("division of "+x+" and "+ y+" is "+(x/y));
        }
    break;
    default:
        console.log("Recheck your input");
    break
}