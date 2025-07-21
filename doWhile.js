// Do While Loop

let num = 10;

do{
    console.log(num);
    num++;
}
while(num<=20);



// Break statement

for(i=1;i<=20; i++){
    if(i%2===0){
        if(i===10){
            break; // Exit the loop when i is 10
        }
        console.log(i);        
    }
}



// Continue statement

for(i=1;i<=20; i++){
    if(i%2===0){
        if(i===10){
            continue; // Skip the rest of the loop when i is 10
        }
        console.log(i);        
    }
}