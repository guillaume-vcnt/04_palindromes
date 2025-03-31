const testDates = [
  "10/15/2015", // FALSE DATE
  "20/09/2000/abc", // FALSE DATE
  "18/abc/2008", // FALSE DATE
  "11/02/2011", // TRUE DATE PALINDROME
  "05/10/2035", // FALSE DATE PALINDROME
];

function isValidDate(date) {
  console.log("date =", date);
  const splitedDate = date.split("/");
  console.log("splited date =", splitedDate);
  if (splitedDate.length !== 3) {
    console.log(splitedDate, "= is invalid format");
    return false;
  } else {
    console.log(splitedDate, "= is valid format");
  }

  const day = parseInt(splitedDate[0], 10); // (base 10)
  const month = parseInt(splitedDate[1], 10); // (base 10)
  const year = parseInt(splitedDate[2], 10); // (base 10)

  if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
    console.log(day, month, year, "= is valid type");
  } else {
    console.log(day, month, year, "= is not valid type");
    return false;
  }

  const resultMaxDaysInMonth = maxDaysInMonth(month, year);
  console.log("max month =", resultMaxDaysInMonth);

  if (
    day >= 1 &&
    day <= resultMaxDaysInMonth &&
    month >= 1 &&
    month <= 12 &&
    year >= 999 &&
    year <= 9999
  ) {
    console.log(day, month, year, "= is valid date");
    return true;
  } else {
    console.log(day, month, year, "= is not valid date");
    return false;
  }
}

//Années bissextiles est divisible par 4 mais pas par 100 sauf si elle est aussi divisible par 400
function maxDaysInMonth(month, year) {
  console.log("month =", month);
  if (month === 2) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return 29; // Année bissextile
    } else {
      return 28; // Année normale
    }
  }

  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    return 31;
  } else {
    return 30;
  }
}

function isPalindrome(date) {
  const splitedDate = date.split("/").join("");
  const reversedDate = splitedDate.split("").reverse().join("");
  console.log("splited date =", splitedDate);
  console.log("reversed date =", reversedDate);
  return splitedDate === reversedDate;
}

function start(date) {
  const resultIsValidDate = isValidDate(date);
  console.log("is valid date =", resultIsValidDate);
  if (resultIsValidDate === true) {
    const resultIsPalindrome = isPalindrome(date);
    console.log("is Palindrome =", resultIsPalindrome);
  }
}

testDates.forEach(start);
