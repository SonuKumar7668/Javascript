let url="https://catfact.ninja/fact";
let fct;
fetch(url)
.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data)=>{
    console.log(data.fact);
    document.querySelector("h1").innerText=data.fact;
})
.catch((err)=>{
    console.log("Error: ",err);
});