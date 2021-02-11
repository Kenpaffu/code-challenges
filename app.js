// ARRAY 1
const texasss = [
  {
    name: 'Mike',
    age: 23,
    gender: 'm',
    us: false,
  },
  {
    name: 'Liz',
    age: 20,
    gender: 'f',
    us: true,
  },
  {
    name: 'Chris',
    age: 102,
    gender: 'm',
    us: true,
  },
  {
    name: 'Chuloo',
    age: 27,
    gender: 'm',
    us: false,
  },
  {
    name: 'Annie',
    age: 30,
    gender: 'f',
    us: true,
  },
];

// Part 1 - Find all users older than 24
// Part 2 - Find the total age of all users
// Part 3 - List all female coders

// const older24 = texasss.filter((el) => el.age > 24);

// const texasssTotalAge = texasss.reduce((acc, curr) => acc + curr.age, 0);

// const texasssFemaleCoders = texasss.filter((el) => el.gender === 'f');

// // Array 1
// console.log(older24);
// console.log(texasssTotalAge);
// console.log(texasssFemaleCoders);

// ARRAY 2
const newieyork = [
  {
    name: 'Michelle',
    age: 19,
    coder: true,
    gender: 'f',
    us: true,
  },
  {
    name: 'Sam',
    age: 25,
    coder: false,
    gender: 'm',
    us: false,
  },
  {
    name: 'Ivy',
    age: 26,
    coder: true,
    gender: 'f',
    us: false,
  },
  {
    name: 'Nick',
    age: 32,
    coder: true,
    gender: 'm',
    us: true,
  },
  {
    name: 'Jim Beglin',
    age: 65,
    coder: false,
    gender: 'm',
    us: true,
  },
];

// Part 1 - List all users in US in ascending order
// Part 2 - Sort all users by age
// Part 3 -  List all female coders

// const ascendingOrder = newieyork
//   .filter((el) => el.us === true)
//   .sort((a, b) => a.name.localeCompare(b.name));

// const ageSort = newieyork.sort((a, b) => a.age < b.age);

// const newieyorkFemaleCoders = newieyork.filter((el) => el.gender === 'f');

// Array 2
// console.log(ascendingOrder);
// console.log(ageSort);
// console.log(newieyorkFemaleCoders);

// ARRAY 3
const vegzas = [
  {
    name: 'Charly',
    age: 32,
    coder: true,
    gender: 'm',
  },
  {
    name: 'Law',
    age: 21,
    coder: true,
    gender: 'm',
  },
  {
    name: 'Rosey',
    age: 42,
    coder: false,
    gender: 'f',
  },
  {
    name: 'Steph',
    age: 18,
    coder: true,
    gender: 'f',
  },
  {
    name: 'Jon',
    age: 47,
    coder: false,
    gender: 'm',
  },
];

// Part 1 - Find the total age of male coders under 25
// Part 2 - List all male coders over 30
// Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.

// const youngMaleCoders = vegzas
//   .filter((el) => el.gender === 'm' && el.age < 25)
//   .reduce((acc, curr) => acc + curr.age, 0);

// const maleCodersOver30 = vegzas.filter(
//   (el) => el.gender === 'm' && el.age > 30
// );

// const totalAges = vegzas
//   .concat(newieyork)
//   .concat(texasss)
//   .reduce((acc, cur) => acc + cur.age, 0);

// // Array 3
// console.log(youngMaleCoders);
// console.log(maleCodersOver30);
// console.log(totalAges);

// Array 1
const older24 = texasss.filter((el) => el.age > 24);

const texasssTotalAge = texasss.reduce((acc, curr) => acc + curr.age, 0);

const texasssFemaleCoders = texasss.filter((el) => el.gender === 'f');

// Array 2
const ascendingOrder = newieyork
  .filter((el) => el.us === true)
  .sort((a, b) => a.name.localeCompare(b.name));

const ageSort = newieyork.sort((a, b) => a.age < b.age);

const newieyorkFemaleCoders = newieyork.filter((el) => el.gender === 'f');

// Array 3
const youngMaleCoders = vegzas
  .filter((el) => el.gender === 'm' && el.age < 25)
  .reduce((acc, curr) => acc + curr.age, 0);

const maleCodersOver30 = vegzas.filter(
  (el) => el.gender === 'm' && el.age > 30
);

const totalAges = vegzas
  .concat(newieyork)
  .concat(texasss)
  .reduce((acc, cur) => acc + cur.age, 0);
