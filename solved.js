function calculateMoney(ticket) {
  if (typeof ticket !== "number") {
    return "Sorry, only integer number are required!";
  }
  if (ticket < 0) {
    return "Sorry, negative numbers cannot be given!";
  }
  const perTicket = 120;
  const janitorSalary = 500;
  const lunchMoneyFor8People = 8 * 50;
  const totalRs = ticket * perTicket;
  const profit = totalRs - (janitorSalary + lunchMoneyFor8People);
  return profit;
}
const result = calculateMoney(10);
// console.log(result);





function checkName(name) {
  if (typeof name !== "string") {
    return "invalid!";
  } else if (name.length === 0 || !name.trim()) {
    return "name is empty";
  }

  const lastChar = name[name.length - 1].toLowerCase();
  if (
    "a" === lastChar ||
    "y" === lastChar ||
    "i" === lastChar ||
    "e" === lastChar ||
    "o" === lastChar ||
    "u" === lastChar ||
    "w" === lastChar
  ) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

const result2 = checkName("RAFEE");
console.log(result2);
