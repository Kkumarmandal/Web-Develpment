//dog image

let url2 = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector ("button");

async function getDogImg (){
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch (err){
        console.log ("Error - ", err );
        return "No DOG IMAGE FOUND";
    }
}

btn.addEventListener ("click", async() => {
    let link = await getDogImg();
    //console.log (link);

    let img = document.querySelector ("#dogI");
    img.setAttribute ("src", link);
    console.log (link);
});
