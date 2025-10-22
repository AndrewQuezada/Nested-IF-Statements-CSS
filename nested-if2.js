//Movie Ticket Pricing
const prompt = require('prompt-sync')();
    let week= prompt("enter if its a weekday (1) or weekend (2) ");
  
    if(week == 2 )
    {

                console.log("Its a weekend day ");
                let time= parseInt(prompt("Enter The time "));
                            if(time <=5)
                            {
                                console.log("$10 ");
                            }
                            else {
                              
                                console.log("$15");
                            
                            }           
                  


    }


    else{

        console.log("Its a weekday, flat rate of $8");
        let age2= parseInt(prompt("Enter your age "));

        if (age2 >= 65){
            console.log("you get a 20% discount ");
        }
        else {
            console.log("you cant get a discount")
        }
    }
