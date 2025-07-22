// Function

function userName(uName, uAge){

    if(uAge>=18){
    console.log(`Welcome ${uName} to the JavaScript course!`);
    console.log(`Your age is ${uAge}`);
    }   
    else{
        console.log(`sorry ${uName}, you are not eligible to join the course.`);
        
    }
    
}
userName("J MOHAMMED NOWFEL", 19);
userName("THAHA", 20);


// Default parameter

function studentList(sName = "Unknown", sAge = "Not mentioned"){

    console.log(`The Student name is  ${sName}`);
    console.log(`Age is  ${sAge}`);

}
studentList("J MOHAMMED NOWFEL", 19);
studentList("Nowfel");
studentList(undefined, 19);
studentList(undefined, undefined);
studentList();

// Default value-variable

let empId = "IFS1234";
let newId = empId ||"Default ID";
console.log(newId);


