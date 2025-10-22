//Restaurant Bill Calculator
const prompt = require('prompt-sync')();
    let week= prompt("enter bill price ");
  
    if(week > 50)
    {

                console.log("Over $50 ");
                let time= parseInt(prompt("Enter party size "));
                            if(time > 6)
                            {
                                console.log("over 6 automatic 18% gratuity");
                            }
                            else {
                                console.log("under 6 tip (15%, 18%, or 20%)");
                                let time= prompt("Do you have a rewards card ");

                              if(time === "yes"){
                                   console.log("10% discount on bill before tip")
                               }
                                  if(time === "no")
                                   console.log("No dicount")
                               
                            }           
    }
    else{

        console.log("suggest 15% tip");
        let time= prompt("Do you have a rewards card ");

        if(time == "yes"){
            console.log("10% discount on bill before tip")
        }
        if(time == "no")[
            console.log("No dicount")
        ]
    }