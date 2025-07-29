//Hoisting -  All the declarations are moved to the top of their scope during the compilation phase, before the code is executed.

// Variable declaration Hoisting


//var a; // This line is hoisted to the top of the scope
//console.log(a); // This will log 'undefined' because 'var' is hoisted
console.log(a);
var a = 10;
console.log(a);


//let b; // This line is not hoisted in the same way as 'var'
//console.log(b); // This will throw a ReferenceError because 'let' is not hoisted
//Temporal Dead Zone (TDZ)
//console.log(b);
let b = 20;
console.log(b);


//const c; // This line is not hoisted in the same way as 'var' and 'let'
//console.log(c); // This will throw a ReferenceError because 'const' is not hoisted
//Temporal Dead Zone (TDZ)
//console.log(c);
const c = 30;
console.log(c);

// Function declaration Hoisting

// Named Function
// This function declaration is hoisted to the top of the scope
simple()

function simple(){
    console.log("This is a simple function");
    
}

// Anonymous Function
// This function expression is not hoisted, so it cannot be called before its declaration

//let simple1
//simple1()  // This will throw a ReferenceError

let simple1 = function(){
    console.log("This is a simple1");
}
simple1()

// same as using var

//var simple2 = undefined; - so the function not called the variable is hoisted
//simple2()  // This will throw a TypeError

var simple2 = function(){
    console.log("This is a simple2");
}
simple2()