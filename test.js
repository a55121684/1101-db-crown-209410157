function reverseWord(input) {
  let word = "";
  let result = "";
  word = input;
  result = word.split("a", "e", "i", "o", "u").reverse().join();
  console.log(result);
  return result;
}

reverseWord("background");
console.log(reverseWord("hello"));
