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

////////// Code challenge 8 (7kyu)
function getVillainName(birthday) {
  const m = [
    "Evil",
    "Vile",
    "Cruel",
    "Trashy",
    "Despicable",
    "Embarrassing",
    "Disreputable",
    "Atrocious",
    "Twirling",
    "Orange",
    "Terrifying",
    "Awkward",
  ];
  const d = [
    "Mustache",
    "Pickle",
    "Hood Ornament",
    "Raisin",
    "Recycling Bin",
    "Potato",
    "Tomato",
    "House Cat",
    "Teaspoon",
    "Laundry Basket",
  ];
  return `The ${m[birthday.getMonth()]} ${d[birthday.getDate() % 10]}`;
}

// console.log(getVillainName(new Date("March 22")));
//The returned value should be a string in the form of "First Name Last Name"

//////////////////// Challenge 9 (7kyu)
// function solve(arr) {
//   let checkNumber = 0;
//   let newArr = [];
//   let tempArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     checkNumber = arr[i];
//     tempArr = arr.slice(i + 1);
//     let x = false;
//     for (let j = 0; j < tempArr.length; j++) {
//       if (checkNumber <= tempArr[j]) {
//         x = false;
//         break;
//       } else {
//         x = true;
//       }
//     }
//     if (x) newArr.push(checkNumber);
//   }
//   newArr.push(arr[arr.length - 1]);
//   return newArr;
// }

// console.log(solve([1, 21, 4, 7, 5]));
// console.log(solve([5, 4, 3, 2, 1]));
// console.log(solve([16, 17, 14, 3, 14, 5, 2]));
// console.log(solve([92, 52, 93, 31, 89, 87, 77, 105]));

// [17,]

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] < arr[j]) {
//       break;
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   newArr.push(arr[arr.length - 1]);
//   return newArr;
// }

// const solve = (arr) => {
//   arr = arr.reverse();
//   return arr.reduce(
//     (result, e, index) => {
//       result =
//         arr[index] > result[0] && result.indexOf(arr[index]) < 0
//           ? [arr[index], ...result]
//           : result;
//       return result;
//     },
//     [arr[0]]
//   );
// };

// function solve(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     while (arr[i] >= newArr[newArr.length - 1]) {
//       newArr.pop();
//     }
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// console.log(solve([1, 21, 4, 7, 5]));
// console.log(solve([5, 4, 3, 2, 1]));
// console.log(solve([16, 17, 14, 3, 14, 5, 2]));
// console.log(solve([92, 52, 93, 31, 89, 87, 77, 105]));

// Challenge 10 (7kyu)
function replaceAll(seq, find, replace) {
  if (typeof seq === "string") seq = seq.split("");
  for (let i = 0; i < seq.length; i++) {
    if (seq.indexOf(find) !== -1) seq.splice(seq.indexOf(find), 1, replace);
  }
  if (typeof seq[0] === "string") seq = seq.join("");
  return seq;
}

replaceAll([1, 1, 4, 1, 2, 2, 3], 1, 2);
replaceAll("tonnerq", "n", "t");
replaceAll("tonnerq", "n", "t");

// function replaceAll(seq, find, replace) {
//   return Array.isArray(seq) ? seq.map(x=>x==find?replace:x) : seq.split(find).join(replace)
// }

// Challenge 11 (7kyu)
function sumEvenNumbers(input) {
  let sum = 0;
  for (const i of input) {
    if (i % 2 === 0) sum += i;
  }
  return sum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
