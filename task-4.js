"use strict";
const formatString = function(string) {
  return string.length <= 40 ? string : `${string.slice(0, 40)}...`;
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
