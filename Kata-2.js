const conditionalSum = function (values, condition) {
  let getCondition = (cond, num) => {
    if (cond === "even") {
      return num % 2 === 0;
    } else {
      return num % 2 !== 0;
    }
  }
  let sum = 0;
  for (let value of values) {
    if (getCondition(condition, value)) {
      sum += value;
    }
  }

  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

/* expected
6
9
144
0
*/