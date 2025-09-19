// print the object property using for..in loop

let person1 = {
    uName: "Mohammed",
    uAge: 20,
    siblings: ['Irfana', 'Nowfel', 'Naveeth'],
    address: {
        houseNo: 18,
        street: "Big street",
        village: 'Authoor',
        city: "Thoothukudi"
    },
    walk(){
        console.log("Walking...");
    }
}

for(let key in person1){
    console.log(person1[key]);
    
}

// print the array value using for..in loop

let fruits = ['apple', 'banana', 'mango', 'pineapple', 'watermelon'];

for(let value in fruits){

    console.log(fruits[value]);
    
}

// print the string value using for..in loop

let uName = "J Mohammed Nowfel Badhusha";

for(let key in uName){
    console.log(uName[key]);
    
}