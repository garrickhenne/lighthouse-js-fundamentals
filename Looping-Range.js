function range(start, end, step) {
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) return [];
  let arr = [];
  while (start <= end) {
    arr.push(start);
    start += step;
  }
  return arr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));