// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter Array & Objects</h1>`;

const log = (...args) => console.log(...args);
/*
let arr1 = [];
let arr2 = [];

for (let i = 0; i < 10; i++) {
  arr1.push(i);
  arr2.unshift(i);
}

console.log(arr1);
console.log(arr2);

for (let i = 0; i < 10; i++) {
  arr1.pop(i);
  arr2.shift(i);
}

console.log(arr1);
console.log(arr2);

*/

let names = ['Srini', 'Jerome', 'Morne', 'Ram', 'Sethu'];
// for transforming letters from camelcase to smaller
console.log(
  names.map((item, index, array) => {
    // console.log(item,index,array)
    return item.toLowerCase();
  })
);

// for transforming letters from camelcase to upper
console.log(
  names.map((item, index, array) => {
    // console.log(item,index,array)
    return item.toUpperCase();
  })
);

// for transforming letters from camelcase to upper
// method chaining
console.log(
  names
    .map((item, index, array) => {
      // console.log(item,index,array)
      return item.toUpperCase();
    })
    .map((item) => {
      return (
        item.charAt(0).toUpperCase() +
        item.substring(1, item.length - 1).toLowerCase()
      );
    })
);

// object key -value pair
// { [key] : value} - object literals

let persons = [];

let numArr = [];
console.clear();

for (let i = 0; i < 10; i++) {
  persons.push({
    name: 'Name ' + i,
    age: Math.round(Math.random() * 100),
  });
  numArr.push(i);
}

// oneline major code
const major = (person) => person.age > 18 && person;

// function like major code

function major2(person) {
  if (person.age > 18) return person;
}

// log(persons.filter(major2));

/*
log(
  persons.filter((item, index, array) => {
    if (item.age > 18) return item;
  })
);
*/

log(persons.reverse().find(major));

const isEvenNumber = (number) => number % 2 === 0;

log(numArr.some(isEvenNumber));

let nameArr1 = [
  'sri',
  'Srini',
  'srinivasan',
  'srinika',
  'srikanth',
  'srividhya',
];

const isNameMatch = (name) => name.toLowerCase().startsWith('sri');

log('every ::: ', nameArr1.every(isNameMatch));
log('some ::: ', nameArr1.every(isNameMatch));
