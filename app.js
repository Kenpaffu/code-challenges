function divisors(integer) {
  let n = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) n.push(i);
  }
  if (n.length < 1 || n === undefined) {
    return `${integer} is prime`;
  } else return n;
}

console.log(divisors(12));
