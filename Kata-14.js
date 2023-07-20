const calculateChange = function (total, cash) {
  if (total === cash) return {};
  let change = cash - total;
  let rtn = {};

  while (change > 0) {
    if (change - 2000 > 0) {
      rtn.twentyDollar = isNaN(rtn.twentyDollar) ? 1 : rtn.twentyDollar + 1;
      change = change - 2000;
    } else if (change - 1000 > 0) {
      rtn.tenDollar = isNaN(rtn.tenDollar) ? 1 : rtn.tenDollar + 1;
      change = change - 1000;
    } else if (change - 500 > 0) {
      rtn.fiveDollar = isNaN(rtn.fiveDollar) ? 1 : rtn.fiveDollar + 1;
      change = change - 500;
    } else if (change - 200 > 0) {
      rtn.twoDollar = isNaN(rtn.twoDollar) ? 1 : rtn.twoDollar + 1;
      change = change - 200;
    } else if (change - 100 > 0) {
      rtn.oneDollar = isNaN(rtn.oneDollar) ? 1 : rtn.oneDollar + 1;
      change = change - 100;
    } else if (change - 25 > 0) {
      rtn.quarter = isNaN(rtn.quarter) ? 1 : rtn.quarter + 1;
      change = change - 25;
    } else if (change - 10 > 0) {
      rtn.dime = isNaN(rtn.dime) ? 1 : rtn.dime + 1;
      change = change - 10;
    } else if (change - 5 > 0) {
      rtn.nickel = isNaN(rtn.nickel) ? 1 : rtn.nickel + 1;
      change = change - 5;
    } else {
      rtn.penny = isNaN(rtn.penny) ? 1 : rtn.penny + 1;
      change = change - 1;
    }
  }

  return rtn;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

/*
{ twoDollar: 1, dime: 1, penny: 3 }
{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
*/