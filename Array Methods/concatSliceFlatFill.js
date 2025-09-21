// Concat method

let arr = [1,2,3,4];
let arr1 = [4,5,6,7];

let newArr = arr.concat(arr1); // it will merge two arrays and return a new array
let newArr1 = arr.concat(5,6); // it will add the elements at the end of the array and return a new array\
let newArr2 = [].concat(arr1); // it will copy the array and return a new array

arr1[0] = 111; // it will not affect the newArr2 because it is a new array

console.log(newArr, newArr1, newArr2, arr1);


// Slice method

let array = [0,1,2,3,4,5,6,7,8];

let slicedArr = array.slice(); // it will copy the array and return a new array
let slicedArr1 = array.slice(3); // it will return a new array from index 3 to the end
let slicedArr2 = array.slice(2,8); // it will return a new array from index 2 to index 8 (8 is not included)

console.log(slicedArr, slicedArr1, slicedArr2);


// Flat method - it is used to flatten the nested arrays

let Arr = [1,2,3,[4,5]];
let Arr1 = [1,2,3,[4,5,[6,7]]];
let Arr2 = [1,2,3,[4,5,[6,7,[8,9]]]];

let flatArr = Arr.flat(); // it will flatten the array by 1 level - default level is 1
let flatArr1 = Arr1.flat(2); // it will flatten the array by 2 levels
let flatArr2 = Arr2.flat(Infinity); // it will flatten the array by infinite levels

console.log(Arr, flatArr);
console.log(Arr1, flatArr1);
console.log(Arr2, flatArr2);

// Fill method - it is used to fill the array with a static value  

let fillArr = [1,2,3,4,5];

fillArr.fill(3); // it will fill the entire array with 3
fillArr.fill(0,2,4); // it will fill the array with 0 from index 2 to index 4 (4 is not included)

console.log(fillArr);


