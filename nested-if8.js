//Job Application Filter
const prompt = require('prompt-sync')();
    let week= prompt("Enter years of experience (minimum 2 years) ");
    if(week >= 2)
    {

                let time= prompt("Do you have a certification ");
                            if(time === "yes")
                            {
                                console.log("Strong candidate");
                            }
                            else {
                                console.log("You need 5+ years ");
                                let time= prompt("how many years? Enter years ");

                            if(time >= 5)
                                   console.log("Qualified candidate")
                               
                            else if(time < 5)
                                   console.log("Entry-level consideration")
                            
                            }           
                  

                        }


    else{

        console.log("incorrect years");
    }