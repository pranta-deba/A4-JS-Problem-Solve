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

function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Sorry, the initial array must be given!";
  } else if (array.length === 0) {
    return "An empty array cannot be given!";
  }

  let onlyNumArray = [];

  for (const element of array) {
    if (typeof element === "number" && !isNaN(element)) {
      onlyNumArray.push(element);
    }
  }
  return onlyNumArray;
}

function password(obj) {
  if (typeof obj !== "object" || Array.isArray(obj) || obj === null) {
    return "invalid";
  } else if (
    obj.name === undefined ||
    obj.birthYear === undefined ||
    obj.siteName === undefined
  ) {
    return "invalid";
  } else if (obj.birthYear.toString().length !== 4) {
    return "invalid";
  }
  const websiteName =
    obj.siteName[0].toUpperCase() + obj.siteName.slice(1).toLowerCase();
  const strongPass = websiteName + "#" + obj.name + "@" + obj.birthYear;
  return strongPass;
}

function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }
  let totalAmount = 0;
  let findBigAmount = 0;
  for (const amount of arr) {
    totalAmount += amount;
    if (3000 <= amount) {
      findBigAmount += amount;
    }
  }
  const tax = (findBigAmount * 20) / 100;
  const totalSavings = totalAmount - (livingCost + tax);
  if (totalSavings >= 0) {
    return totalSavings;
  } else {
    return "earn more";
  }
}
