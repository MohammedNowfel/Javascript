// Join method

let arr = [1,2,3,4,5];

let joinArr = arr.join(); // it will convert the array to string with "," separator by default
let joinArr1 = arr.join("@"); // it will convert the array to string with "@" separator

console.log(joinArr);
console.log(joinArr1);

// toString method

let arr1 = [1,2,3,4,5];
let toStringArr = arr1.toString(); // it will convert the array to string with "," separator only, it will ignore any separator passed as argument
let toStringArr1 = arr1.toString("@"); // it will convert the array to string with "," separator only, it will ignore the "@" separator

console.log(toStringArr);
console.log(toStringArr1);

