//Question 1 Square and sum the array elements using the arrow function and then find the average of the array

let num = [1, 2, 3, 4];

let suareArr = num.map ((ele) => {
    return ele*ele;
});
console.log (suareArr);

let avegArr = suareArr.reduce ((res,ele) => {
    return sum = (res+ele);    
});

console.log(`Average of the array is ${avegArr/suareArr.length}`);


//question 2 Create a new array using the map function whose each element is equal to the original element plus 5

let number = [0, 5, 10, 15, 20];

let plusFive = number.map ((element) => {
    return element + 5;
});

console.log(plusFive);

//question 3 Create a new array whose elements are in uppercase of words present in the original array

let str = ["abc", "abc", "ad", "Kishan"];

let newArr = str.map ((element) => {
    return element.toUpperCase();
});
console.log(newArr);

//question 4 Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled

let doubleAndReturingArgs = (arr, ...args) => [
    ...arr,
    ...args.map ((v) => (v * 2)),
];

console.log (doubleAndReturingArgs ([1, 2, 3], 4, 4));

//question 5  Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object

let mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

console.log ({a: 1, b: 2}, {c: 3, d: 4});