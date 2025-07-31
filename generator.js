function* generatorFunction(){
    yield "First Value"
    yield "Second Value"
    yield "Third Value" 
    
}
let generator = generatorFunction();

console.log(generator.next());

console.log('Im executing after first yield statement');

console.log(generator.next().value);
console.log(generator.next().done);
console.log(generator.next());

// Eg 

function* url(){
    yield "http:/"
    yield "uniqtech.com/"
    yield "homepage"
}

let origin = url()
console.log(origin.next().value);
console.log(origin.next().value);
console.log(origin.next().value);
console.log(origin.next().value);




