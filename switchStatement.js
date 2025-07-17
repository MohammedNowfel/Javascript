/*

switch(expression){
    case 1 : statement;
    break;
    case 2 : statement;
    break;
    ...
    ...
    ...
    
    case n : statement;
    break;
    default: statement;
    break;
}

*/

let traffic_signal = "over";

switch(traffic_signal){
    case "red": console.log("Stop");
    break;
    case "yellow": console.log("Slow Down");
    break;
    case "green": console.log("Go");
    break;
    default: console.log("Pay Fine");
    break;   
}


// Fall through methods

let day = "sunday";

switch(day){
    case "monday":  
   
    case "tuesday": 
   
    case "wednesday":   
    
    case "thursday":    
   
    case "friday": console.log("Weekday");
    break;

    case "saturday":    
   
    case "sunday": console.log("WeekEnd");
    break;
    
}