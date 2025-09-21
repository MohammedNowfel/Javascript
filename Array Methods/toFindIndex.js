// indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// it is searching from left to right


let arr = [10,20,30,40,13,24,20,35,46];

let index = arr.indexOf(20); // it will return the index of 20 which is 6
// let index = arr.indexOf(100); // it will return -1 because 100 is not present in the array
// let index = arr.indexOf(35,5); // it will return the index of 35 which is 6, starting the search at index 5
// let index = arr.indexOf(10,-1); // it will return -1 because the search starts from the end and goes backwards, so 10 is not found
// let index = arr.indexOf(10,-8); // it will return the index of 10 which is 0, because -8 is treated as 0 (if the negative index is less than the array length, it starts from 0)

console.log(index);


// lastIndexOf method returns the last index at which a given element can be found in the array, or -1 if it is not present.
// it is searching from right to left

let lastIndex = arr.lastIndexOf(20); // it will return the last index of 20 which is 6

console.log(lastIndex);



