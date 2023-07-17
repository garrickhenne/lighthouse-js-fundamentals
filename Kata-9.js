const camelCase = function (input) {
  let wordArray = input.trim().split(" ");
  let camelCaseString = "";
  camelCaseString += wordArray[0];
  wordArray.shift();
  for (let word of wordArray) {
    if (word.length === 0) {
      continue;
    }
    let capitalizedWord = word[0].toUpperCase() + word.slice(1, word.length);
    camelCaseString += capitalizedWord;
  }

  return camelCaseString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
console.log(camelCase("    o  o   o   o"));