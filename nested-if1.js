//Loan Eligibility Checker
const prompt = require('prompt-sync')();
    let age= prompt("enter your age ");
  
    if(age >=21)
    {

                console.log("Age criteria met ");
                let income= parseInt(prompt("Enter yourincome"));
                            if(income >=30000)
                            {
                                console.log("Income criteria met ");
                                  let creditScore = parseInt(prompt("Enter Your Credit Score"));
                                        if(creditScore >=650)
                                        {
                                            console.log("Credit score criteria met");
                                            console.log("Loan Approved");
                                        }
                                        else{
                                            console.log("Credit score too low");
                                              console.log("Doesnt qualify for loan");
                                        }
                            }
                            else {
                              
                                console.log("Doesnt qualify for loan");
                            
                            }           
                  


    }


    else{

        console.log("You dont qualify - underage");
    }

