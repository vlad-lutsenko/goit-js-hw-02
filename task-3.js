"use strict";
const findLongestWord = function(string) {
  string = string.split(" ");
  let longestWord = string[0];
  // console.log(string);
  for (const word of string) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
