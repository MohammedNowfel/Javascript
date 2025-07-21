// While Loop

let i = 15;

while(i>=1){
    console.log(i);
    i--;
}

// example 1:

let val = 1234;
let sum = 0;

while(val > 0){

    let last = val % 10;
    val = parseInt(val/10);
    sum = sum + last;
}
console.log(sum);
