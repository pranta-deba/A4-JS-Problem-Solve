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
const calculateMoneyResult = calculateMoney(10);
// console.log(calculateMoneyResult);
// --------------------------------------------------------------------------------
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
const checkNameResult = checkName("RAFEE");
// console.log(checkNameResult);

// --------------------------------------------------------------------------------

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
const deleteInvalidsResult = deleteInvalids([
  1,
  null,
  undefined,
  18,
  -19,
  NaN,
  "12",
  [1, 2],
  { ob: "lala" },
]);
// console.log(deleteInvalidsResult);

// --------------------------------------------------------------------------------

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

  const websiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
  const strongPass = websiteName + "#" + obj.name + "@" + obj.birthYear;
  return strongPass;
}
const passwordResult = password({name: "kolimuddin",birthYear: 1958,siteName: "google"});
// console.log(passwordResult);

// --------------------------------------------------------------------------------