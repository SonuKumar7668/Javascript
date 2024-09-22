let url="https://catfact.ninja/fact";
let url2="https://dog.ceo/api/breeds/image/random"
let btn=document.querySelector("button");
async function getfact(){
    try{
    let ft=await axios.get(url);
    console.log(ft.data.fact);
    // document.querySelector("#fact").innerText=ft.data.fact;
    return(ft.data.fact);
    }
    catch(e){
        console.log("err",e);
    }
}

async function getimg(){
    try{
        let mg=await axios.get(url2);
        console.log(mg.data.message);
        return mg.data.message;
    }
    catch(e){
        console.log("Error",e);
    }
}
btn.addEventListener("click",async ()=>{
    let facts=await getfact();
    document.querySelector("#fact").innerText=facts;
    let imgs=await getimg();
    document.querySelector("img").setAttribute("src",imgs)
});