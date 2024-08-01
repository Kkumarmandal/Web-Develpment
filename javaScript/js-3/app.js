let arr1 = [7, 9, 0, -2];
console.log (arr1);
let n = 3;
//first n natural number
let firstN = arr1.slice(0,n);
console.log(firstN); 

//last n natural number
let lastN = arr1.slice(arr1.length-n);
console.log (lastN);

let str = "";
if (str.length == 0){
    console.log("string is Blank");
}else {
    console.log ("string is not Blank")
}

let char ="Kishan";
let idx = 0;
if (char[idx] === char[idx].toLowerCase()){
    console.log("Lower Case")
}else {
    console.log("UpperCase");
}

// let str1=prompt("please enter a string");
// console.log(`original string = ${str1}`);
// console.log(`string without spaces = ${str1.trim()}`)

let arr2 = ["hello",'a',23,64,99,-6];
let item=64;
if(arr2.indexOf(item)!=-1){
    console.log("element exists in array");
}else{
    console.log("element doesn't exist in array");
}