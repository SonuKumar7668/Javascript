function add(...args){
    for(let i=0;i<args.length;i++){
        console.log("You gave us ", args[i]);
    }
}
add(3,4,5,6);
function min(a,b,c,d,t){
    console.log(arguments);
}
min(3,4,5,6,7,6,2);

function add(...args){
    console.log("sum of elements are ",args.reduce((sum,el)=>sum +el))
}
add(4,5,6);