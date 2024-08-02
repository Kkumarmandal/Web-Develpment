const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max) + 1;
console.log(random);

let guess = prompt("Guess the number");

while(true){
    if (guess == "quite"){
        console.log("Quitting game");
        break;
    }
    
    if (guess == random){
        console.log("Congrats right answer !! .Your random number is " + random);
        break;
    }else if (guess < random){
        guess = prompt("Hint : Your guess is too small !!. Please try again")
    } else {
        guess = prompt ("Hint : Your guess is too large !! Please try again");
    }  

}