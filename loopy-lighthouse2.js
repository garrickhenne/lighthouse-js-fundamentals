function loopyLighthouse(range, multiples, words) {
  while (range[0] <= range[1]) {
    let value = range[0];
    if (value % multiples[0] === 0 && value % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (value % multiples[0] === 0) {
      console.log(words[0]);
    } else if (value % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(value);
    }
    range[0]++;
  }
}


// For example, say we called the function with the following arguments.

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
// The loopyLighthouse function should log to the console all the numbers from 15 to 90,
// except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", and multiples 
// of 2 and 5 with "BattyBeacon".