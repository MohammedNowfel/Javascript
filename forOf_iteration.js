// print the array value using for..of loop

let fruits = ['apple', 'banana', 'mango', 'pineapple', 'watermelon'];

for(let value of fruits){
    console.log(value);
}

// print the string value using for..of loop

let uName = "J Mohammed Nowfel Badhusha";

for(let char of uName){
    console.log(char);
    
}

// print the generator function value using for..of loop

function* generatorFunction(){
    yield 'one';
    yield 'two';
    yield 'three';
}

let iterator = generatorFunction();

for(let value of iterator){
    console.log(value);
    
}