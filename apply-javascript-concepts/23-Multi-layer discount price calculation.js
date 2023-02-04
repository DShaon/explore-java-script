// 1- if the ticket is less than 100, per ticket price : 100
// if ticket is more than 100 , but less than 200, per ticket :90
// ticket more than 200
/* 
first 100 - 100tk
first 101-200- 90 tk 
201-rest of ticket price  -70tk
*/
// calculate total price of ticket.

// function totalTicket(tickets) {
//     var ticket100Price = 100;
//     var ticket101to200price = 90;
//     var ticket201toMorePrice = 70;



//     if (tickets <= 100) {

//         tp = tickets * ticket100Price;
//         return tp

//     } else if (tickets > 100 && tickets <= 200) {

//         var ticket = tickets - 100;
//         var t100t200 = ticket * ticket101to200price;
//         var t100P = 100 * 100;
//         var ttp = t100t200 + t100P;
//         return ttp;

//     } else if (tickets > 200) {
//         var ticket = tickets - 200;
//         var ticket200p = ticket * ticket201toMorePrice;
//         var t100t200 = 90 * 100;
//         var t100P = 100 * 100;
//         var ttp = ticket200p + t100t200 + t100P;
//         return ttp;
//     }



// }

// var ticketAmount = 90;
// const totalPrice = totalTicket(ticketAmount);
// console.log(totalPrice);



function ticketsPrice(ticketQuantity) {
    const ticket100Price = 100;
    const ticket101to200Price = 90;
    const ticket201toMore = 70;

    if (ticketQuantity <= 100) {

        var ticketPrice = ticketQuantity * ticket100Price
        return ticketPrice;

    } else if (ticketQuantity <= 200) {
        var restTicket = ticketQuantity - 100;
        var restTicketPrice = restTicket * ticket101to200Price;
        var first100TicketPrice = 100 * ticket100Price;
        var ticketPrice = restTicketPrice + first100TicketPrice;
        return ticketPrice;

    } else {
        var restTicket = ticketQuantity - 200;
        var restTicketPrice = restTicket * ticket201toMore;
        var first100TicketPrice = 100 * ticket100Price;
        var ticket101to200TicketPrice = 100 * ticket101to200Price;
        var ticketPrice = restTicketPrice + first100TicketPrice + ticket101to200TicketPrice;
        return ticketPrice
    }
}
const tickets = 201;
const totalTicketPRice = ticketsPrice(tickets)
console.log('Price =', totalTicketPRice)