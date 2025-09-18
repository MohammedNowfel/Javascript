// Spread Operator in Arrays

let hobbies = ['cricket', 'volleyball', 'football', 'kabbadi'];
let hobbies1 = ['watching movies', 'listening music', 'reading books'];

let allHobbies = [...hobbies, ...hobbies1]; // spread operator (...)
console.log(allHobbies);


// let newHobbies = hobbies

// newHobbies[0] = 'basketball';
// console.log(newHobbies, hobbies);

// hobbies[3] = "tennis;"
// console.log(newHobbies, hobbies);

let newHobbies1 = [...hobbies];

newHobbies1[0] = 'Basketball';
console.log(newHobbies1, hobbies);

let newHobbies2 = [...hobbies, 'chess', 'carroms'];
console.log(newHobbies2);



// Spread Operator in Objects


let college = {
    sName: "J Mohammed Nowfel Badhusha",
    regNum: "23ucs160",
    class: "3rd BSc CS" 
}

let hostel = {
    ...college, pagNum: 3168, roomNo: 385
}

console.log(hostel);


// Rest Parameter - it collects all the remaining elements into an array

function restParam(a, b, ...arr) { // rest parameter (...) is used in last of the function parameter
    console.log(a, b, arr);
    
}
restParam(1, 2, 3, 4, 5, 6, 7)



