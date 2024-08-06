let btn = document.querySelector("button");
let input = document.querySelector("input")
let ul = document.querySelector("ul")

btn.addEventListener ("click", function (){
    let item = document.createElement("li");
    item.innerText = input.value;

    let delBtn = document.createElement("button"); //element create kiya button as delete
    delBtn.innerText = "Delete"; // text me likha Delete
    delBtn.classList.add ("delete"); //class ko add

    //console.log (input.value);

    item.appendChild (delBtn); //delete btn ko append ki item mean li me
    ul.appendChild (item);
    input.value = "";
})

ul.addEventListener ("click", function (event){
    //console.dir (event.target.nodeName);    
    if (event.target.nodeName == "BUTTON"){

        let listItem = event.target.parentElement;
        listItem.remove();
        //console.log (listItem);
        console.log ("Deleted");
    }
})



// let delebtns = document.querySelectorAll (".delete"); // jo existing element ko delete kar sakte hai
// for (delBt of delebtns){
//     delBt.addEventListener ("click", function (){
//         let par = this.parentElement;
//         console.log (par);
//         par.remove();
//     })
// }