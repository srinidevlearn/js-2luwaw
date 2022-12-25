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
    id: i,
    name: 'Name ' + Math.round(Math.random() * 100),
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

log(persons.filter(major2));

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
  'harisriprasad',
];

const isNameMatch = (name) => name.toLowerCase().includes('sri');

//return boolean
log('every ::: ', nameArr1.every(isNameMatch));
log('some ::: ', nameArr1.every(isNameMatch));
// checking with array
log(nameArr1.includes('sr'));

// checking with strings
log('srini'.includes('sr'));

let tempNumArr = [...nameArr1];

//immutable
log(nameArr1.slice(2, nameArr1.length - 1), nameArr1.length);
// mutable
log(nameArr1.splice(2, nameArr1.length - 1), nameArr1.length);

//concat immutable - to join two arrays
tempNumArr = tempNumArr.concat(nameArr1);
log(tempNumArr);

let sum = numArr.reduce((acc, value) => {
  log('acc ::: ', acc);
  log('value ::: ', value);

  return acc + value;
});

log(sum);
// array to string
log(tempNumArr.join(', '));

// array sort

const nameAscSort = (previous, next) => previous.localeCompare(next);
const nameDescSort = (previous, next) => next.localeCompare(previous);

const numericAscSort = (previous, next) => previous - next;
const numericDescSort = (previous, next) => next - previous;

log(tempNumArr.sort(nameAscSort));
log(tempNumArr.sort(nameDescSort));

numArr.splice(5, 0, 20, 30, 40);

log(numArr);

log(numArr.sort(numericAscSort));
log(numArr.sort(numericDescSort));

//Objects

console.clear();

// 3ways objects can be created
// object literals
// new Object() or Object.assign()
// using function constructor

// object literal
let profile = {
  name: 'Srini',
  age: 20,
  gender: 'male',
};

let sukumarProfile = {
  name: 'Sukumar',
  age: 20,
  gender: 'male',
};

// using new Object
let profile2 = new Object({
  name: 'Srini',
  age: 20,
  gender: 'male',
});

let sukumarProfile2 = new Object({
  name: 'Srini',
  age: 20,
  gender: 'male',
});

// using function constructor
function profileConstructor(id, name, age, gender) {
  this.name = name;
  this.id = id;
  this.age = age;
  this.gender = gender;
}

let profile3 = new profileConstructor('Srini', 20, 'Male');
let profile4 = new profileConstructor('Sukumar', 20, 'Male');

console.log(profile, profile2, profile3);

const calc = {
  _input1: 0,
  _input2: 0,

  isInput1Even: false,
  isInput2Even: false,
  // to intercept object properties {getter and setter}
  // object varaibales -> properties or props
  // object functions -> methods
  get input1() {
    return this._input1;
  },

  set input1(value) {
    this._input1 = value;
    if (value % 2 === 0) this.isInput1Even = true;
    else false;
  },

  get input2() {
    return this._input2;
  },

  set input2(value) {
    this._input2 = value;
    if (value % 2 === 0) this.isInput2Even = true;
    else false;
  },

  add: function () {
    return this.input1 + this.input2;
  },
  smartAdd: function (a, b) {
    return a + b;
  },
};

/// accessing props value
calc.input1 = 10;
calc.input2 = 20;
calc['input1'] = 20;

// create props dynamically
calc.input3 = 10;
calc['input4'] = 20;

log(persons);

let temp = {};

persons.forEach((item, index, array) => {
  temp['_' + item.id] = item;
});

let temp2 = JSON.parse(JSON.stringify(temp));

temp2['_2'] = 0;

console.log('from temp ::: ', temp, 'from temp2 ::: ', temp2);
