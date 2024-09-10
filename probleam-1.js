function calculateMoney(ticketCount) {
    if (ticketCount < 0) {
        return "Error: Ticket count cannot be negative!";
    }
    
   else{
    const ticketPrice = 120;
    const dailyExpense = 900; 
    
    const totalIncome = ticketCount * ticketPrice;
    const remainingMoney = totalIncome - dailyExpense;
    return remainingMoney;
   }
}


console.log(calculateMoney(10));  
console.log(calculateMoney(1055));  
console.log(calculateMoney(93));  
console.log(calculateMoney(-130));  