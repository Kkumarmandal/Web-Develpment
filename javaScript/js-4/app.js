/*let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for(let i=0; i<arr.length; i++) {
if(arr[i] == num) {
arr.splice(i, 1);
}
}
console.log(arr);*/

//Question 1 Write a JS program to delete all occurrences of element ‘num’ in a given array
let arr = [1, 2, 3, 4, 5, 6, 2 ,3];
let num = 2;
for (let i = 0; i < arr.length; i++){
    if (arr[i] == num){
        arr.splice(i,1);
    }
}
console.log(arr);

//question 2  Write a JS program to find the no of digits in a number.
let num1 = 287152;
let count = 0;

let copy = num1;

while (copy > 0) {
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);

//question 3 Write a JS program to find the sum of digits in a number.
let num3 = 287152;
let sum = 0;

let copy1 = num3;

while (copy1 > 0){
    digit = copy1 % 10;
    sum += digit;
    copy1 = Math.floor(copy1/10);
}
console.log(sum);

//question 4 Print the factorial of a number n.
let n = 5;
let factorial = 1;

for(let i = 1; i <= n; i++){
    factorial*= i;
}
console.log (`factorial of ${n} is ${factorial}`);

// question 5 Find the largest number in an array with only positive numbers.

let arrays = [2, 5, 10, 5, 6, 4, 15];
let largest = 0;

for (let i = 0; i <= arrays.length; i++){
    if (largest < arrays[i]){
        largest = arrays[i];
    }
}
console.log(largest);



