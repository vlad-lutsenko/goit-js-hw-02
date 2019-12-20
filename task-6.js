"use strict";
let input;
const numbers = [];
let total = 0;

do {
  input = prompt("введите число!");

  if (Number.isNan(input)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    numbers.push(Number(input));
    console.log(numbers);
  }
} while (input !== null);

if (numbers.length > 0) {
  for (let number of numbers) {
    total += number;
  }
}
console.log(`сумма чисел в массиве равна ${total}`);
