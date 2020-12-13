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

// CODE CHALLENGE
// Tony's Space
function litres(time) {
  li = Math.floor(time * 0.5);
  return li;
}
console.log(litres(6.7));

// Code Challenge Palindrome
const isPalindrome = (x) => {
  return x === Number(String(x).split("").reverse().join(""));
};
console.log(isPalindrome(121));
