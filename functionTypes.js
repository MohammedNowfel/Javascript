// Named Function

function add(uName){
    console.log("Named Function " + uName);
    
}
add("Nowfel")



// Anonymous Function
let ananymousFunction = function(uName){
    console.log("Anonymous Function " + uName);
    
}
ananymousFunction("Mohammed")



// Arrow Function

let arrowFun = (uName)=>{
    console.log("Arrow Function " + uName);
    
}
arrowFun("Badhusha")

// for multiple parameters

let addFun = (a,b)=>{
    console.log(a+b);   
}
addFun(10,20)

// for single parameter

let addFun1 = a=> console.log(a);   
addFun1(10)

// Simple

let firstName = "Nowfel";

let returnFun = name1 => name1
let finalFun = returnFun(firstName)

console.log(finalFun)



// Higher Order Function and Callback Function

function function1(){
    console.log("I am higher order function");
    
}

function function2(){
    console.log("I am call back function");
    
}

function1(function2()); // Passing function2 as a callback to function1 and function1 as a higher order function to function2


// Eg for callback function

function addition(subtraction, a, b){
    console.log(a+b);
    subtraction(20,10)

}

function subraction(x,y){
    console.log(x-y);
}

addition(subraction, 10, 20)

