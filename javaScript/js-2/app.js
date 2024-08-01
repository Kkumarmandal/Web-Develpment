//question -1
let num = 110;
if (num % 10 == 0){
    console.log ("Good");
}else {
    console.log ("Bad");
}

//question -2
/*let username = prompt("User's name");
let age = prompt ("Age ?");
//alert ("Name is " + username + " and age is " + age + "years old.");
alert (`${username} is ${age} years old`);*/

//question -3
let quarter = 3;
switch (quarter){
    case 1 :
        console.log ("January, February, March");
        break;
    case 2 : 
        console.log ("April, May, June");
        break;
    case 3: 
        console.log ("July, August, September");
        break;
    case 4:
        console.log ("October, November, December");
}

//question -4
let str = "applee";
if ((str[0] == "a" || str[0] == "A") && (str.length > 5)){
    console.log ("Golden String");
}else {
    console.log ("Not a Golden String");
}

//question -6
let num1 = 2;
let num2 = 5;

if ((num1 % 10) === (num2 % 10)){
    console.log ("Numbers have the same last digit which is" , num1%10)
}else {
    console.log ("Numbers does not have the same last digit")
}