//E-commerce Order Processing
const prompt = require('prompt-sync')();
    let week= prompt("enter if its in stock (1) if in stock or not in stock (2) ");
  
    if(week == 1 )
    {

                console.log("Its in stock ");
                let time= parseInt(prompt("Enter pay ment type (1)if Paypal (2) if credit card "));
                            if(time ==1)
                            {
                                console.log("verify account validity ");
                                 let validity= prompt("Type 1 to validity ");
                                if(validity == 1) {
                                    console.log("approved")
                                }
                            }
                            else {
                              
                                console.log("verify card validity");
                                let validity= prompt("Type 1 to validity ");
                                if(validity == 1) {
                                    console.log("approved")
                                }
                            
                            }           
                  


    }


    else{

        console.log("Not in stock");
    }