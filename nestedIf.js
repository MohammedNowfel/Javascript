// Nested if

let age = 18;
let height = 170;
let weight = 60;

if(age>=18){
    if(height>=170){
        if(weight>=60){
            console.log("You have Selected");
        }
        else{
            console.log("Your weight is low");
            
        }
    }
    else{
        console.log("Your height is low");
        
    }
}
else{
    console.log("Your age is low");  
}



// Ternary Operator

age>=18 ? console.log("you are Adult") : console.log("you are child");

