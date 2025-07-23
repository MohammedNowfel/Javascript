// var - Function scope

function outerFunction(){

    if(true){
    var functionVar = "I am function scope variable";
    }
    console.log(functionVar); // This will work because 'var' is function scoped

}
outerFunction()



// let and const - Block scope

function blockScoped(){
    if(true){
        let blockVariable = "I am block scope variable";
        const blockVariable1 = "I am also block scope variable";
        console.log(blockVariable); // This will work because 'let' is block scoped
        console.log(blockVariable1);
        
    }
    //console.log(blockVariable); // This will not work because 'let' is block scoped
    //console.log(blockVariable1); // This will not work because 'const' is block scoped
}
blockScoped();

// It will be work if you use 'let' and 'const' inside the function block
// But it will not work if you try to access them outside the block

function blockScoped1(){
    let blockVariable = "I am block scope variable";
    const blockVariable1 = "I am also block scope variable";

    if(true){
        console.log(blockVariable); // This will work because 'let' is block scoped
        console.log(blockVariable1); // This will work because 'const' is block scoped
    }
    
}
blockScoped1();

/*
// Var - Global scope

var globalScopeVar = "I am global scope variable";
let blockScope = "I am block scope variable";
const blockScope1 = "I am also block scope variable";

// window is work on UI
console.log(window.globalScopeVar); // This will work because 'var' is global scoped
console.log(window.blockScope); // This will not work because 'let' is block scoped // Undefined
console.log(window.blockScope1); // This will not work because 'const' is block scoped // Undefined
*/

// Global scope and local scope

// Globel Scope
var a = 10;
let b = 20;
const c = 30;

// Scope chain

function accessGlobalLocalVar(){
    // Local Scope
    var a = 101;
    let b = 202;
    const c = 303;

    function innerFunction(){
    // Local Scope
    var a = 100;
    let b = 200;
    const c = 300;

    console.log(a+b+c); // This will access the local variables a, b, c // The local variables not have means they used glober scope variables
    }
    innerFunction();

    console.log(a+b+c);
    
}
accessGlobalLocalVar();

console.log(a+b+c);
