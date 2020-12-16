"use strict";

//////////// Code Challenge 1 (7kyu)
const divisors = (integer) => {
  let n = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) n.push(i);
  }
  if (n.length < 1 || n === undefined) {
    return `${integer} is prime`;
  } else return n;
};

// console.log(divisors(32));

///////////// CODE CHALLENGE 2 (8kyu)
function litres(time) {
  const li = Math.floor(time * 0.5);
  return li;
}
// console.log(litres(6.7));

////////////// Code Challenge Palindrome (8kyu)
const isPalindrome = (x) => {
  return x === Number(String(x).split("").reverse().join(""));
};
// console.log(isPalindrome(121));

///////////// Code Challenge 4 (8kyu)
function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
// console.log(sum([]));

//////////// Code Challenge 5 (8kyu)
function warnTheSheep(queue) {
  let wolfPos = 0;
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] === "wolf") {
      wolfPos = i;
    }
  }
  const sheepInDanger = queue.length - 1 - wolfPos;
  if (wolfPos !== queue.length - 1) {
    return `Oi! Sheep number ${sheepInDanger}! You are about to be eaten by a wolf!`;
  } else {
    return "Pls go away and stop eating my sheep";
  }
}

// function warnTheSheep(queue) {
//   const position = queue.reverse().indexOf("wolf");
//   console.log(position);
//   return position === 0
//     ? "Pls go away and stop eating my sheep"
//     : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
// }

// console.log(warnTheSheep(["sheep", "sheep", "wolf", "sheep"]));

//////// Code challenge 6 (8kyu)
function sakuraFall(v) {
  const branch = 5 * 80;
  return v > 0 ? branch / v : 0;
}
// console.log(sakuraFall(10));

// console.log(+"1");

///////// Code Challenge 7 (7kyu)
function hydrate(s) {
  const str = s.replace(/[^0-9]/g, "");
  const arr = str.split("");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum === 1 ? `${sum} glass of water` : `${sum} glasses of water`;
}

// console.log(hydrate("2 glasses of wine and 1 shot"));

// function hydrate(s) {
//   let answer = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (parseInt(s[i]) > 0) {
//       answer += +s[i];
//     }
//   }
//   return answer > 1 ? `${answer} glasses of water`: '1 glass of water'
// }

// console.log(parseInt("2 glasses of wine and 1 shot"));
