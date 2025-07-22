// Return type of a function

function findRecArea(l,b){    // findRecArea

    console.log("Calculating area of rectangle");
    
    return l*b
    console.log("This will not execute"); // The return statement exits the function and returns the value
    
    
}
let newVal = findRecArea(20,10);
console.log(findRecArea(100,50), newVal);  // newVal


// Conditional statements used in functions

function findRectArea(l,b){     // findRectArea

    console.log("Calculating area of rectangle");

    let condition = false;

    if(condition){
        return l*b;
    }
    else{
        return null;
    }
    
}
let newValue = findRectArea(20,10);
console.log(findRectArea(100,50), newValue); // newValue


// Dont return multiple values from a function

function cubic(num){
    // console.log(num**3);
    return(num**3,"Eighty", true, 120)  // if you use multiple values, it will return only the last value
}
let val = cubic(4)
console.log(val)

// Non- Return type of a function

function name1(){
    console.log("Non-return type function");
    // return 12
}
let value = name1()
console.log(value);

