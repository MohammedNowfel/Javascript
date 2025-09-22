let fruits = ["apple", "orange", "banana", "grape", "mango"];

// // forEach method
// // it does not return anything, it just executes the function for each element in the array
// // Chaining methods is not possible with forEach because it does not return anything

// fruits.forEach(printFruits);

// function printFruits(firstVal, index, totArr){
//     console.log(firstVal, index, totArr);
// }

// // Map method
// // it returns a new array with the results of calling a function for every array element
// // Chaining methods is possible with map because it returns a new array

// fruits.map(function(firstVal, index, totArr){
//     console.log(firstVal, index, totArr);

// });

let newFruits = fruits.forEach((fVal)=>{
    console.log(fVal.toUpperCase());
    
    return fVal
})

console.log(newFruits); // it will return undefined because forEach does not return anything

let newFruits1 = fruits.map((fVal, index)=>{
    return {id: index+1, fruit: fVal};
})

console.log(newFruits1); // it will return a new array with the same elements as the original array

// Chaining methods with map

let mapFruits = fruits.map(fVal => fVal.toUpperCase()).sort().fill("FRUIT");

console.log(mapFruits);


// // Chaining methods with forEach - it will give error because forEach does not return anything

// let forEachFruits = fruits.forEach(fVal => fVal.toUpperCase()).sort().fill("FRUIT");

// console.log(forEachFruits);


//Condition Based Statements using map

let condFruits = fruits.map((fVal)=>{ return fVal=="apple"})

console.log(condFruits);

// Condition Based Statements using forEach

fruits.forEach(val=>{console.log(val=="apple")})


