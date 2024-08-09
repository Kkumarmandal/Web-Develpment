
let btn = document.querySelector ("button");

btn.addEventListener ("click", async() => {
    let facts = await getFacts();
    
    let p = document.querySelector ("#result");
    p.innerText = facts;
    p.style.color = "red";
    
})

let url = "https://catfact.ninja/fact";

async function getFacts (){
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (err){
        console.log ("Error - ", err );
        return "No Cat facts found";
    }
}



