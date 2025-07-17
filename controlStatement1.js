// If else-If statement

/*

if(cond){
    statement;
}
else if(cond){
    statement;
}
else if(cond){
    statement;
}
    ...
    ...
    ...

else if(cond){
    statement;
}
else{
    statement;
}

*/

let hour = 28;

// else if ladder

if(hour>=1 && hour<=6){
    console.log("Early Morning");
}
else if(hour>=7 && hour<=12){
    console.log("Morning");
}
else if(hour>=13 && hour<=18){
    console.log("Noon");
}
else if(hour>=19 && hour<=24){
    console.log("Night");
}
else{
    console.log("It is not an valid hour");
    
}



// Example

let mark = 75;

if(mark>=40 && mark<=60){
    console.log("E-Grade");
    
}
else if(mark>=61 && mark<=80){
    console.log("C-Grade");
    
}
else if(mark>=81 && mark<=90){
    console.log("B-Grade");
    
}
else if(mark>=91 && mark<=100){
    console.log("A-Grade");
    
}
else if(mark>100){
    console.log("Invalid mark");
    
}
else{
    console.log("Arrear");
    
}