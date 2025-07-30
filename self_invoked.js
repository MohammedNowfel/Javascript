function normalFun(){
    console.log("Executed whenever i call");
    
}
normalFun()
normalFun();

//Self-Invoked Function
//IIFE- Immidiately Invoked Function Expression

(function(uName,uAge){
    console.log("Self-Invoked Function", uName+uAge);
    
})("Nowfel",29) // This function is executed and clear


//Closure

function outerfunction(){
    let outerVariable = "I am from outer function"
    function innerfunction(){
        console.log(outerVariable);
        
    }
    return innerfunction
}
let innerFun = outerfunction()
innerFun()