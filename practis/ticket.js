function ticket (ticketquantity){
    let first100ticketPrice =100;
    let second100ticketPrice =90;
    let third100ticketPrice =70;
    if( ticketquantity<=100){
        let first100ticketcost=ticketquantity*first100ticketPrice;

        return first100ticketcost;

        
    }
    else if (ticketquantity <= 200){
        let restTicket= ticketquantity-100;
        let second100ticketcost=restTicket*second100ticketPrice+first100ticketPrice*100;
        return second100ticketcost;
    }
    else{
        let restTicket= ticketquantity-200;
        let third100ticketcost=restTicket*third100ticketPrice+second100ticketPrice*100+first100ticketPrice*100;
        return third100ticketcost;
    }

}
let wantedTicket = ticket(350);
console.log("Total Cost :",wantedTicket);
