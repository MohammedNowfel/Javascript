// Object

let user = {
    userName : "Nowfel",
    userAge : 20,
    hairColor : "black",
    eyeColor : "brown",
    eat : function(){
        console.log("Eating...");
        return "Eating Food";
    }
}

console.log(user.userName, user.userAge);
console.log(user.hairColor);
console.log(user.eyeColor);
user.eat()

let eat = user.eat();
console.log(eat);


let vehicle = {
    "vehicleType" : "car",
    "vehicleColor": "red",
    "seat Capacity": [4,6,8],
    "models": ["bmw", "audi", "ferrari"]

}
console.log(vehicle.vehicleType);
console.log(vehicle["vehicleColor"]);
console.log(vehicle["seat Capacity"][0]);
console.log(vehicle.models[2]);

// Shorthand Property

let uName = "Mohammed"
let uAge = 20

// let person1 = {
//     uName: uName,
//     uAge: uAge
// }

let person1 = {
    uName,
    uAge
}

console.log(person1.uName, person1.uAge);

// Dynamic Property

let prop = "Email"

let property ={
    ["prop"]: "nowfel29@gmail.com",
    [prop]: "mohammed29@gmail.com"
}

console.log(property.prop); 
console.log(property["prop"]);

console.log(property[prop]);









