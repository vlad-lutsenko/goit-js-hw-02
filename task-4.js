"use strict";
const formatString = function(string) {
  if (string.length > 40) {
    string = string.slice(0, 39);
    // console.log(string.length);
    string = `${string}... `;
  }
  return string;
};
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// console.log(formatString("Curabitur ligula sapien, tincidunt non.").length);

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console
  .log
  // formatString("Vestibulum facilisis, purus nec pulvinar iaculis.").length
  ();

console.log(formatString("Curabitur ligula sapien."));
// console.log(formatString("Curabitur ligula sapien.").length);

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   ).length
// );
