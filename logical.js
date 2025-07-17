// Logical Operators

// AND Operator (&&) // All conditions must be true returns true

let age = 19;
console.log(age>= 18 &&  age <=30); // true && true = true
age = 35;
console.log(age>= 18 &&  age <=30); // true && false = false
age = 16;
console.log(age>= 18 &&  age <=30); // false && true = false  // This is short circuit evaluation

let idProof = "Aadhar";
console.log(idProof=="License" && idProof=="Pancard"); // false && false = false

// OR Operator (||) // At least one condition must be true returns true

let user_pwd = "12345";
console.log(user_pwd=="12345" || user_pwd=="54321"); // true || false = true

user_pwd = "54321";
console.log(user_pwd=="12345" || user_pwd=="54321"); // false || true = true

user_name = "abc";
console.log(user_pwd=="54321" || user_name=="abc"); // true || true = true

console.log(user_pwd=="12345" || user_name=="xyz"); // false || false = false


// NOT Operator (!) // Negates the condition returns true if false 

console.log(!(10>5)); // !(true) = false
console.log(!(10<5)); // !(false) = true





