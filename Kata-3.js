const numberOfVowels = function (data) {
  let isVowel = (letter) => {
    return letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u";
  }
  let count = 0;
  for (let letter of data) {
    if (isVowel(letter)) {
      count++;
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels("o"));
console.log(numberOfVowels("t"));
console.log(numberOfVowels("t------------"));


/* expected
3
5
5
*/