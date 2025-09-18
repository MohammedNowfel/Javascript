// Object Destructuring

let obj = {
    id: 1,
    uName: "nowfel"
}

let {id,uName} = obj; // destructuring assignment

console.log(id,uName);


// Nested Object Destructuring

let nestObj = {
    sName: "J Mohammed Nowfel",
    uAge: 20,
    uAddress: {
        houseNo: 18,
        street: "Big street",
        city: "Thoothukudi"
    }
}

let {sName, uAge, uAddress:{houseNo, street, city}} = nestObj;   // set the property names for the object

console.log(sName, houseNo, city);

