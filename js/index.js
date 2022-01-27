"use strict";

console.group("Task 0");

const evenNumbers = [];

for (let i = 0; i < 10; i++) {
  const number = Math.trunc(Math.random() * 10);
  evenNumbers.push(number);
}

console.log("numbers :>> ", evenNumbers);

console.groupEnd();
console.group("Task 1");

evenNumbers.pop();
console.log("numbers :>> ", evenNumbers);

evenNumbers.unshift(Math.trunc(Math.random() * 10));
console.log("numbers :>> ", evenNumbers);

evenNumbers.push(Math.trunc(Math.random() * 10));
console.log("numbers :>> ", evenNumbers);

console.groupEnd();
console.group("Task 2");

console.log(evenNumbers.length);

console.groupEnd();
console.group("Task 3");

function getEvenIndex(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (i % 2 === 0) {
      console.log(arr[i]);
    }
  }
}

getEvenIndex(evenNumbers);

console.groupEnd();
console.group("Task 4");

function getEvenNumb(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] !== 0) {
      console.log(arr[i]);
    }
  }
}

getEvenNumb(evenNumbers);

console.groupEnd();
console.group("Task 5");

function getNullElement(arr) {
  for (let key in arr) {
    if (arr[key] === 0) {
      console.log(key);
    }
  }
}

getNullElement(evenNumbers);

console.groupEnd();
console.group("Task 6");

function calcNullElement(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      sum++;
    }
  }
  return sum;
}

console.log("calcNullElement() :>> ", calcNullElement(evenNumbers));

console.groupEnd();

console.group("Методы перебора массивов");
console.group("Task 7");

const numbers = [-1, 5, 0, 9, -10];

const nonZeroNambers = numbers.filter((number) => number !== 0);

console.log("nonZeroNambers :>> ", nonZeroNambers);

console.groupEnd();
console.group("Task 8");

const squaredNumbers = numbers.map((number) => number ** 2);

console.log("squaredNumbers :>> ", squaredNumbers);

console.groupEnd();
console.group("Task 9");

console.log(
  "isAllEvenNumbers :>> ",
  numbers.every((number) => {
    let i = 2;
    const rootOfNumber = Math.sqrt(number);
    while (i < rootOfNumber) {
      if (number % i++ === 0) return false;
    }
    return number > 1;
  })
);

console.groupEnd();
console.group("Task 10");

console.log(
  "isNegativeNumber :>> ",
  numbers.some((number) => number < 0)
);

console.groupEnd();
console.group("Task 11");

numbers.forEach((number) => console.log(Math.pow(number, 3)));

console.groupEnd();

console.groupEnd();
