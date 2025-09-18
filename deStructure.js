// Array Destructuring

let arr = [10, 20, 30, 40, 50];

// let firstVal = arr[0];

// console.log(firstVal);

let [a,b,c,d,e] = arr; // destructuring assignment

console.log(a);
console.log(a,d);


let [p,,,,t] = arr;
console.log(p,t);


// rest operator in destructuring

let array = [1,2,3,4,5,6,7,8,9,0];

let [a1,a2,a3,...an] = array;   // rest operator (...) must be in last position 

console.log(a1,a2,a3, an);


// Nested Array Destructuring

let nestArr = [10,20, 30, [40,50,60,[70,80,90]]];

let [n1,n2,n3,[n4,n5,n6,[n7,n8,n9]]] = nestArr;    // set default names for all elements for the array

console.log(n2,n5,n8);





