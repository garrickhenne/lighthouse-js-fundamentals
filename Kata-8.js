const repeatNumbers = function (data) {
  let appendedMessage = "";

  while (data.length > 0) {
    let value = data.shift();
    for (let i = 0; i < value[1]; i++) {
      appendedMessage += value[0];
    }
    if (data.length > 0) {
      appendedMessage += ", ";
    }
  }
  return appendedMessage;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

/*
1111111111
11, 222
10101010, 343434343434, 9292
*/