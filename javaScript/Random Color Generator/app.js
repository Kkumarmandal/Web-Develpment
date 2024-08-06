let btn = document.querySelector('button');

btn.addEventListener ("click", function () {
    let h3 = document.querySelector("h3");
    let randomColor = getRandomNumber();
    h3.innerText = randomColor;

    let divStyle = document.querySelector("div")
    divStyle.style.backgroundColor = randomColor;
    h3.style.color = randomColor;
    btn.style.backgroundColor = randomColor;
    btn.style.color = 'white';

    console.log("Color Updated ");
})

let hdg3 = document.querySelector('h3')
hdg3.addEventListener ("click", function (){
    console.log ("h3 was Clicked");
})



function getRandomNumber (){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}