// Array

let flavours = ["venilla", "butterscotch", "blackcurrent", "pista"]

console.log(flavours);
// used the index for identify the value
console.log(flavours[0]);
console.log(flavours[1]);
console.log(flavours[2]);
// used for print the final value
console.log(flavours.length-1);
console.log(flavours[flavours.length-1]);



// It is Hemogenous and Hetrogenous
let sample = ["nowfel", 20, true, null, undefined, {age:20}]
console.log(sample);



// Array Constructor

let newArray = new Array();

newArray[0]= "nowfel";
newArray[1]= 18;
newArray[2]= "Bsc CS"
newArray[3]= "Jamal college"

console.log(newArray);



// Dense & Sparse Array

let denseArray = [1,2,3,4,5]  // Contigious Memory Location
                //1004, 1008, 1012, 1016, 1020

// formula = base Address + (index * size)
                // 1004 + (0 * 4)
                // 1004 + 0 = 1004


let sparseArray = [10,20,,30,,40];  // Hash table or Hash map

console.log(sparseArray);
console.log(sparseArray[2]);  // undefined


