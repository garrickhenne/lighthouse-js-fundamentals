const makeCase = function (input, case1) {

  if (!Array.isArray(case1)) {
    case1 = [case1];
  }

  while (case1.length > 0) {
    if (case1.includes("camel")) {
      input = transformCamel(input);
      case1 = case1.filter(transformation => transformation !== "camel");
    } else if (case1.includes("pascal")) {
      input = transformPascal(input);
      case1 = case1.filter(transformation => transformation !== "pascal");
    } else if (case1.includes("snake")) {
      input = transformSnake(input);
      case1 = case1.filter(transformation => transformation !== "snake");
    } else if (case1.includes("kebab")) {
      input = transformKebab(input);
      case1 = case1.filter(transformation => transformation !== "kebab");
    } else if (case1.includes("title")) {
      input = transformTitle(input);
      case1 = case1.filter(transformation => transformation !== "title");
    } else if (case1.includes("vowel")) {
      input = transformVowel(input);
      case1 = case1.filter(transformation => transformation !== "vowel");
    } else if (case1.includes("consonant")) {
      input = transformConsonant(input);
      case1 = case1.filter(transformation => transformation !== "consonant");
    } else if (case1.includes("upper")) {
      input = input.toUpperCase();
      case1 = case1.filter(transformation => transformation !== "upper");
    } else if (case1.includes("lower")) {
      input = input.toLowerCase();
      case1 = case1.filter(transformation => transformation !== "lower");
    } else {
      return "Provided a case that was not expected.";
    }
  }

  return input;
}

function transformCamel(input) {
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
}

function transformPascal(input) {
  let wordArray = input.trim().split(" ");
  let pascalCaseString = "";
  for (let word of wordArray) {
    if (word.length === 0) {
      continue;
    }
    let capitalizedWord = word[0].toUpperCase() + word.slice(1, word.length);
    pascalCaseString += capitalizedWord;
  }
  return pascalCaseString;
}

function transformSnake(input) {
  return input.trim().replaceAll(" ", "_");
}

function transformKebab(input) {
  return input.trim().replaceAll(" ", "-");
}

function transformTitle(input) {
  input = input.trim();
  let wordArray = input.split(" ");
  for (let i = 0; i < wordArray.length; i++) {
    wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].slice(1, wordArray[i].length);
  }
  return wordArray.join(" ");
}

function transformVowel(input) {
  const vowels = ["a", "e", "i", "o", "u"];
  let word = "";
  for (const element of input) {
    let index = vowels.indexOf(element.toLowerCase());
    if (index >= 0) {
      word += vowels[index].toUpperCase();
    } else {
      word += element;
    }
  }
  return word;
}

function transformConsonant(input) {
  const vowels = ["a", "e", "i", "o", "u"];
  let word = "";
  for (const element of input) {
    let index = vowels.indexOf(element.toLowerCase());
    if (index < 0) {
      word += element.toUpperCase();
    } else {
      word += element;
    }
  }
  return word;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
// console.log(transformVowel("difdiiieeoqodf"));
// console.log(transformConsonant("oskdfornsdij"));
// console.log(transformCamel("this is a astring"));
// console.log(transformPascal("this is a string"));
// console.log(transformKebab("this is a string"));
// console.log(transformSnake("this is a string"));

/*
thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING
*/