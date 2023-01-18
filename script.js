// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function cube(a, b) {
  return Math.pow(a, 3) + b**3;
}
console.log(cube(2, 3));

// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

let salary = Number(prompt('Введите размер Вашей заработной платы'));

const tax = (salary) => {
  if (Number.isNaN(salary)) {
    alert('Введите числовое значение');
  } else {
    alert(`Размер заработной платы за вычетом налогов равен ${salary * 0.87}`)
  }
}
tax(salary);

// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let numberA = Number(prompt('Enter first number'));
let numberB = Number(prompt('Enter second number'));
let numberC = Number(prompt('Enter third number'));

const congruence = (numberA, numberB, numberC) => {
  let maximum = numberA;
  if (numberB > maximum) maximum = numberB;
  if (numberC > maximum) maximum = numberC;
  console.log(`Maximum number is ${maximum}`);
}
congruence(numberA, numberB, numberC);

// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

let total;
const sum = (a, b) => {
  return total = a + b;
}
sum(numberA, numberB);
console.log(`${numberA} + ${numberB} = ${total}`);

let diff;
const difference = (a, b) => {
  (a > b) ? (diff = a - b) : (diff = b - a);
  return diff;
}
difference(numberA, numberB);
(numberA > numberB) ? console.log(`${numberA} - ${numberB} = ${diff}`) : console.log(`${numberB} - ${numberA} = ${diff}`);

let mult;
const multiply = (a, b) => {
  return mult = a * b;
}
multiply(numberA, numberB);
console.log(`${numberA} * ${numberB} = ${mult}`);

let div;
const division = (a, b) => {
  return div = a / b;
}
division(numberA, numberB);
console.log(`${numberA} / ${numberB} = ${div}`);