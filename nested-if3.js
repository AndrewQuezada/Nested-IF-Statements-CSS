//Employee Bonus Calculator
const prompt = require('prompt-sync')();
    let age= prompt("Base bonus: $1000, enter years of service: ");
  
    if(age >=5)
    {

                console.log("year criteria met 50% increase");
                let income= parseInt(prompt("Enter score 1/5 "));
                            if(income == 5)
                            {
                                console.log("Additional $2000 ");
                            }
                            else if(income == 4){
                                console.log("Additional $1000")
                            }
                            else {
                              
                                console.log("Doesnt qualify for loan");
                            
                            }           
                  


    }


    else{

        console.log("No bonus");
        let income2= parseInt(prompt("Enter score 1/5 "));
        if(income2 == 5){
            console.log("25% to final bonus")
        }
        else {
            console.log("no bonus")
        }
    }