"use strict";
let input;
const numbers = [];
let total = 0;

const totalSum = input => {
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
  return total;
};
alert(`сумма чисел в массиве равна ${totalSum()}`);
