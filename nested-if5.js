//University Admission System
const prompt = require('prompt-sync')();
    let gpa= prompt("enter GPA 3 ");
  
    if(gpa >=3 )
    {

                console.log("Your Gpa is over 3! ");
                let time= parseInt(prompt("Enter SAT score "));
                            if(time >1200)
                            {
                                console.log("You have over 1200! ");
                                 let validity= prompt("Type leadership role ");
                                if(validity == "honors") {
                                    console.log("approved")
                                }
                            }
                            else {
                              
                                console.log("Did not met");
                            }           
    }
    if (gpa <3){
        console.log("Did not met")
    }


    else{
        console.log("type a number");
    }