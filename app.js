"use strict";

// Code Challenge 1 (7kyu)
const divisors = (integer) => {
  let n = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) n.push(i);
  }
  if (n.length < 1 || n === undefined) {
    return `${integer} is prime`;
  } else return n;
};

console.log(divisors(32));

// CODE CHALLENGE 2 (8kyu)
// Tony's Space
function litres(time) {
  const li = Math.floor(time * 0.5);
  return li;
}
console.log(litres(6.7));

// Code Challenge Palindrome (8kyu)
const isPalindrome = (x) => {
  return x === Number(String(x).split("").reverse().join(""));
};
console.log(isPalindrome(121));

// Code Challenge 4 (8kyu)
function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
console.log(sum([]));
