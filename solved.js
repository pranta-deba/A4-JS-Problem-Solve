function calculateMoney(ticket){
    if (typeof ticket !== "number") {
        return "Sorry, only integer number are required!";
    }if (ticket < 0) {
        return "Sorry, negative numbers cannot be given!"
    }
    const perTicket = 120;
    const janitorSalary = 500;
    const lunchMoneyFor8People = 8 * 50;
    const totalRs = ticket * perTicket;
    const profit = totalRs - (janitorSalary + lunchMoneyFor8People);
    return profit;
}
const result = calculateMoney(10);
console.log(result);