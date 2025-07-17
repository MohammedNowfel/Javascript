// Type Conversion in JavaScript

// Implicit conversion

let str ="45";
let num = "100";

console.log(str + num);
console.log(typeof (str + num));

// string

console.log("Hii" + true);
console.log("Hii" + undefined);
console.log("Hii" + null);
console.log("Hii" + [1, 2, 3]);
console.log("Hii" + {});

// string + anything === anything + string =  String

// Number

console.log(10 + true); // true = 1 , false = 0
// 10 + 1 = 11
console.log(10 + undefined); // NaN (Not a Number)
console.log(10 + null); // 10 + 0 = 10    // null = 0
console.log(10 + [1,2]); // 10 + "1,2" = "101,2"
console.log(10 + {}); // 10 + "[object Object]" = "10[object Object]"

// Boolean

console.log(true + 10); // 1 + 10 = 11
console.log(true + undefined); // NaN
console.log(true + null); // 1 + 0 = 1

console.log( 10 == "10"); //true

console.log(10 - "2"); // 10 - 2 = 8
console.log(10 * "2"); // 10 * 2 = 20
console.log(10 -"abc"); // NaN
console.log(10 - ""); // 10 - 0 = 10  // empty string = 0


// Explicit conversion

// number

console.log(10 + Number("2")); // 10 + 2 = 12
console.log(Number("")); // 0
console.log(Number("abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number([1,2])); // NaN
console.log(Number({})); // NaN

// boolean

console.log(Boolean("")); // false
console.log(Boolean("abc")); // true
console.log(Boolean(0)); // false
console.log(Boolean(-20)); // true
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean([])); // true
console.log(Boolean({})); // true

console.log(Boolean(Infinity)); // true
console.log(Boolean(-Infinity)); // true
console.log(Boolean(NaN)); // false

// String

// string + anything === anything + string =  String































