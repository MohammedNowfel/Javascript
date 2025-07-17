// Primitive datatypes in Javascript


// Number datatype

var num = 120;
var num = 1.20;

console.log(num);

// String datatype

let userName = "Nowfel";  //double quotes
userName = 'Mohammed';    //single quotes
userName = `Badhusha`;    //backticks

console.log(userName);

// Boolean datatype

let condition = true;
condition = false;

console.log(condition);

// Undefined datatype

let value;
value = undefined; // value is declared but not initialized

console.log(value);

// Null datatype

let emptyValue = null; // empty value

console.log(emptyValue);

//-------------------------------------------------------------------------------------------//

// Non-Primitive datatypes in Javascript


// Array

let multipleUsers = ["Instagram","whatsapp","facebook","telegram"];
// Index                0           1          2           3

console.log(multipleUsers);

console.log( multipleUsers[0], multipleUsers[2]);

console.log(multipleUsers.length); // length of the array

console.log(multipleUsers.length-1); // last index of the array

console.log(multipleUsers[multipleUsers.length-1]); // last element of the array


// Object
// Key value pair

let vehicle = {
    vehicleType: "four wheeler",
    brand: "toyota",
    price: 800000,
    fuelType: "petrol"
}

console.log(vehicle);

console.log(vehicle.brand); // Accessing object property using dot 

console.log(vehicle.price); // Accessing object property using dot

//---------------------------------------------------------------------------------//




