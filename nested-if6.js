//Insurance Premium Calculator
const prompt = require('prompt-sync')();
    let age= prompt("Base premium: $1000 enter age ");
    let car
    if(age <=25)
    {
                console.log("+$500");
    }
    else {

        console.log("+$500");
        let income2= prompt("Have you been in a accident yes or no ");
        if(income2 == "yes"){
            console.log("+$300")
        let car= parseInt(prompt("how many cars do you have? "));
        }
        if(car > 1){
            console.log("10% discount on total")
        }
        if(car <= 2) {
            console.log("no discount")
        }
        else
        console.log("enter a number")
    }