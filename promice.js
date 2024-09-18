function addtodb(data){
    return new Promise((sucess,fail)=>{
        let speed=Math.floor(Math.random()*10+1);
        if(speed>4){
            sucess("Data was saved");
        }else{
            fail("Weak connection");
        }
});
}
let req=addtodb("hello");
req
.then(()=>{
    console.log("sucess");
})
.catch(()=>{
    console.log("fail");
})