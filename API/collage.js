let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");
btn.addEventListener("click", async ()=>{
    console.log("button was clicked");
    let country=document.querySelector("input").value;
    console.log(country);
    let colleges= await getreq(country);
    console.log(colleges);
    show(colleges);
});

async function show(colleges){
    let list=document.querySelector(".list");
    list.innerText="";
    try{
    for(col of colleges){
        console.log(col.name);
        let li=document.createElement("li");
        li.innerText=`${col.name}, State - ${col.country}`;
        list.appendChild(li);
    }
    }catch(err){
        console.log("error",err);
    }
}
// let country="India";
async function getreq(country){
    try{
        let res=await axios.get(url+country);
        console.log(res);
        return res.data;
    }catch(err){
        console.log("Error",err);
    }
}
// getreq();