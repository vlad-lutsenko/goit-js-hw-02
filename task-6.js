"use strict";
let input;
const numbers = [];
let total = 0;

do {
  input = prompt("введите число!");

  if (Number.isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    numbers.push(Number(input));
    console.log(numbers);
  }
} while (input !== null);

for (let number of numbers) {
  total += number;
}

alert(`сумма чисел в массиве равна ${total}`);
