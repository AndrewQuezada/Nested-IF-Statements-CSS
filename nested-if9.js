//Gym Membership Pricing
const prompt = require('prompt-sync')();
    let week= prompt("Base price: $50/month Enter menbership type: basic, premium, or VIP ");
  
    if(week === "basic")
    {
                console.log("No change")
                let time= parseInt(prompt("Enter age "));
                            if(time < 25)
                            {
                                console.log("You get 25% off");
                            }
                            if(time > 25) {
                                console.log("$50/month ");
                            }           
                  
                        }
                        
   else if(week === "premium")
    {
                console.log("+$30, includes group classes")
                let time= parseInt(prompt("Enter age "));
                            if(time < 25)
                            {
                                console.log("You get 25% off");
                            }
                            else {
                                console.log("$80/month ");
                            }           
                  

                        }
   else if(week == "VIP")
    {
                console.log("+$70, includes group classes")
                let time= parseInt(prompt("Enter age "));
                            if(time < 25)
                            {
                                console.log("You get 25% off");
                            }
                            else {
                                console.log("$120/month ");
                            }           
                  

                        }
    else{
        console.log("incorrect");
    }