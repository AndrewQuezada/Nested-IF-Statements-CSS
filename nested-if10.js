//Hotel Room Pricing System
const prompt = require('prompt-sync')();
    let week= prompt("Base price: $100/night Enter room type (Standard, Deluxe, Suite) ");
    if(week === "Standard")
    {
                console.log("No change")
                let time= prompt("Enter season (Peak, Regular, Off-peak)");
                            if(time === "Peak")
                            {
                                console.log("50% increase on room price");
                            }
                             let stay= prompt("Enter length of stay ");
                            
                            if(stay >= 7)
                                console.log("15% discount on total")
                            
                            if(stay >= 14)
                                console.log("25% discount on total")
                            else
                            console.log("No discount")
                        
                            if(time === "Regular")
                            {
                                console.log("No change in price.")
                                if(stay >= 7)
                                console.log("15% discount on total")
                            
                            else if(stay >= 14)
                                console.log("25% discount on total")
                            else if(stay < 7){
                                console.log("No Discount")
                            }
                            }
                            if(time === "Off-peak")
                                if(stay >= 7)
                                console.log("15% discount on total")
                            
                            if(stay >= 14)
                                console.log("25% discount on total")
                            else {
                                console.log("No Discount")
                            }
                                let stay2= prompt("Enter loyalty status (None, Silver, Gold, Platinum) ");

                                if(stay2 === "None"){
                                    console.log("No Disvount")
                                }

                                if(stay2 === "Silver"){
                                    console.log("Free breakfast ($20 value per night)")
                                }
                                if(stay2 === "Gold"){
                                    console.log("Free breakfast + room upgrade to next tier")
                                }
                                if(stay2 === "Platinum"){
                                    console.log("Platinum: Free breakfast + free parking + 10% additional discount")
                                }
                            }
                                
                            
                        

       
                        
    else if (week === "Deluxe")
    {
    console.log("+$50 ")

                let time= prompt("Enter season (Peak, Regular, Off-peak)");
                            if(time === "Peak")
                            {
                                console.log("50% increase on room price");
                            }
                             let stay= prompt("Enter length of stay ");
                            
                            if(stay >= 7)
                                console.log("15% discount on total")
                            
                            if(stay >= 14)
                                console.log("25% discount on total")
                            else
                            console.log("No discount")
                        
                            if(time === "Regular")
                            {
                                console.log("No change in price.")
                                if(stay >= 7)
                                console.log("15% discount on total")
                            
                            if(stay >= 14)
                                console.log("25% discount on total")
                            else {
                                console.log("No Discount")
                            }
                            }
                            if(time === "Off-peak")
                                if(stay >= 7)
                                console.log("15% discount on total")
                            
                            else if(stay >= 14)
                                console.log("25% discount on total")
                            else if(stay < 7){
                                console.log("No Discount")
                            }
                                let stay2= prompt("Enter loyalty status (None, Silver, Gold, Platinum) ");

                                if(stay2 === "None"){
                                    console.log("No Disvount")
                                }
                                else if(stay2 === "Silver"){
                                    console.log("Free breakfast ($20 value per night)")
                                }
                                else if(stay2 === "Gold"){
                                    console.log("Free breakfast + room upgrade to next tier")
                                }
                                else if(stay2 === "Platinum"){
                                    console.log("Platinum: Free breakfast + free parking + 10% additional discount")
                                }
                            }
else if (week === "Suite")
    {
    console.log("+$150 ")

                let time= prompt("Enter season (Peak, Regular, Off-peak)");
                            if(time === "Peak")
                            {
                                console.log("50% increase on room price");
                            }
                             let stay= prompt("Enter length of stay ");
                            
                            if(stay >= 7)
                                console.log("15% discount on total")
                            
                            else if(stay >= 14)
                                console.log("25% discount on total")
                            else if(stay < 7){
                            console.log("No discount")
                            }
                        
                            if(time === "Regular")
                            {
                                console.log("No change in price.")
                                if(stay >= 7)
                                console.log("15% discount on total")
                            
                            if(stay >= 14)
                                console.log("25% discount on total")
                            else {
                                console.log("No Discount")
                            }
                            }
                            if(time === "Off-peak")
                                if(stay >= 7){
                                console.log("15% discount on total")
                                }
                            
                            if(stay >= 14){
                                console.log("25% discount on total")
                            }
                            else {
                                console.log("No Discount")
                            }
                                let stay2= prompt("Enter loyalty status (None, Silver, Gold, Platinum) ");

                                if(stay2 === "None"){
                                    console.log("No Disvount")
                                }
                                else if(stay2 === "Silver"){
                                    console.log("Free breakfast ($20 value per night)")
                                }
                                else if(stay2 === "Gold"){
                                    console.log("Free breakfast + room upgrade to next tier")
                                }
                                else if(stay2 === "Platinum"){
                                    console.log("Platinum: Free breakfast + free parking + 10% additional discount")
                                }
                            }
else {
    console.log("type something else")
}
