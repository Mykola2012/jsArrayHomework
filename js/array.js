"use strict";

console.group("Task 0");

const numbers = [];

for (let i = 0; i < 10; i++) {
  const number = Math.trunc(Math.random() * 10);
  numbers.push(number);
}

console.log("numbers :>> ", numbers);

console.groupEnd();
console.group("Task 1");

numbers.pop();
console.log("numbers :>> ", numbers);

numbers.unshift(Math.trunc(Math.random() * 10));
console.log("numbers :>> ", numbers);

numbers.push(Math.trunc(Math.random() * 10));
console.log("numbers :>> ", numbers);

console.groupEnd();
console.group("Task 2");

console.log(numbers.length);

console.groupEnd();
console.group("Task 3");

function getEvenIndex(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (i % 2 === 0) {
      console.log(arr[i]);
    }
  }
}

getEvenIndex(numbers);

console.groupEnd();
console.group("Task 4");

function getEvenNumb(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] !== 0) {
      console.log(arr[i]);
    }
  }
}

getEvenNumb(numbers);

console.groupEnd();
console.group("Task 5");

function getNullElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      console.log(arr.indexOf(0));
    }
  }
}

getNullElement(numbers);

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

console.log("calcNullElement() :>> ", calcNullElement(numbers));

console.groupEnd();
