const urlEncode = function (text) {
  if (text.length === 0) {
    return "";
  }
  text = text.trim();
  let newText = "";
  let encode = "%20";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      newText += encode;
    } else {
      newText += text[i];
    }
  }

  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
console.log(urlEncode(""));

/*
Lighthouse%20Labs
Lighthouse%20Labs
blue%20is%20greener%20than%20purple%20for%20sure

*/