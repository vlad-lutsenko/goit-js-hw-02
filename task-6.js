"use strict";
let input;
const numbers = [];
let total = 0;

do {
  input = prompt("введите число!");

  if (Number.isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }

  if (input !== null) {
    numbers.push(Number(input));
  }
  // if (input === null && numbers.length === 0) {
  //   alert("сумма каких чисел, если ты нажал отмену? ))");
  // }
} while (input !== null);

if (numbers.length) {
  for (let number of numbers) {
    total += number;
  }

  console.log(`сумма чисел в массиве равна ${total}`);
}
