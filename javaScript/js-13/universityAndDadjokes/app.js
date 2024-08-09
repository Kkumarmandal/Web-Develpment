
//SENDING HEADER
// let url = "https://icanhazdadjoke.com/";

// async function getJokes (){
//     try {
//         const config = { headers : { Accept : "application/json"} };
//         let res = await axios.get(url, config);
//         console.log (res.data);
//     }
//     catch (err) {
//         console.log ("ERROR - ", err);

//     }
// }

let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector ("button");

btn.addEventListener ("click" , async () => {
    let country = document.querySelector ("input").value;
    console.log (country);

    let colArr = await getColleges(country);
    //console.log (colArr);

    show(colArr);

})

function show(colArr){
    let list = document.querySelector ("#list");
    list.innerText = ""; // it will help to empty the li whenever we search
    for (colg of colArr){
        console.log (colg.name);

        //created list item
        let li = document.createElement ("li");
        li.innerText = colg.name;
        list.appendChild (li);
    }
}

async function getColleges (country){
    try {
        let res = await axios.get(url + country);
        return res.data;
    }
    catch (err){
        console.log ("ERROR - ", err);
        return [];
    }
}