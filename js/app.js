'use strict';

const greeting = 'Greetings traveler. Welcome to the Web.';
function displayMessage(message) {
  console.log(message);
}
displayMessage(greeting);

// let loaf = ({ flour: 300, water: 210});
let flour = 300;
let water = 210;
let hydration = () => {console.log('bread');};

let loaf = {flour, water, hydration};
console.log(loaf.water, loaf.flour);

loaf.hydration();

let foo = 3, 
  bar = 35, 
  fum = 'cool',
  quux = true,
  spam = '-1000';


let object = {foo, bar, fum, quux, spam};
console.log(object);

for(const property in object) {
  console.log(`object.${property} = ${object[property]}`);
}

let meals = ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'];

let pippen = {meals};
console.log(pippen);
console.log(pippen.meals[3]);

let workerBees = [
  {name: 'Jeff', jobTitle: 'janitor', boss: false},
  {name: 'Sally', jobTitle: 'fisherman', boss: false},
  {name: 'Kyle', jobTitle: 'programmer', boss: false},
  {name: 'Larry', jobTitle: 'boss', boss: true}
];

let boss = '';
for(let i = 0; i < workerBees.length; i++){
  if (workerBees[i].boss === true){
    boss = workerBees[i].name;
  }
}

for(let i = 0; i < workerBees.length; i++) {
  // console.log(workerBees[i].name + ' - ' + workerBees[i].jobTitle);

  if (workerBees[i].boss === false){
    console.log(`${workerBees[i].jobTitle} ${workerBees[i].name} reports to ${boss}`);
  } else {
    console.log(`${workerBees[i].name} reports to nobody!`);
  }
}

//console.log(boss);

let cipher = {a: 2, b: 3, c: 4, d: 5};





for(const property in cipher) {
  console.log(`${property} = ${cipher[property]}`);
}

let decode = word => {
  let firstLetter = word.slice(0, 1);
  //if (firstLetter === 'a' || firstLetter === 'b' || firstLetter === 'c' || firstLetter === 'd'){
  if(cipher[firstLetter]){
    let code = cipher[firstLetter];
    return word.slice(code-1, code);
  }
  return '-';
};

console.log(decode('arizona'), 'arizona');
console.log(decode('buffalo'), 'buffalo');
console.log(decode('california'), 'california');

let stringToArray = function (str) {
  return str.trim().split(' ');
};

const someWords = 'the cats and the dogs inside arizona cactus become aware of the rewind apple bloom';

const secretMessage = 'deeei vroom alok blom ceevexious dirremextious krotar belcore aaron cromtar dovop';
const newWords = stringToArray(someWords);

console.log(someWords);
console.log(newWords);

let decodeWords = words => {
  let arrayOfWords = stringToArray(words);
  let newString = '';
  for (let i = 0; i < arrayOfWords.length; i++) {
    newString += decode(arrayOfWords[i]);
  }
  return newString;
};

console.log(decodeWords(someWords));
console.log(decodeWords(secretMessage));

// Factory Functions are functions that return an object without using 'new'

const createCharacter = (name, nickname, race, origin, attack, defense, weapon) => {
  return {
    name: name,
    nickname: nickname,
    race: race,
    origin: origin,
    attack: attack, 
    defense: defense,
    weapon: weapon,
    describe: function (){
      return `${this.name} is a ${this.race} from ${this.origin} who uses a ${weapon}`;
    },
    evaluateFight: function(){
      let damage = this.attack - this.defense;
      if(this.defense > this.attack){
        return `Your opponent takes ${this.attack} damage and you receive no damage`;
      }
      return `Your opponent takes ${this.attack} damage and you receive ${damage} damage`;
    }
  };
};

let newChr1 = createCharacter('tony stark', 'ironman', 'human', 'earth', 21, 34, 'energy weapons');

console.log(newChr1.describe());
console.log(newChr1.evaluateFight());

let lotrCharacters = [
  createCharacter('Gandalf the White', 'Gandalf', 'Wizard', 'Middle Earth', 10, 6, 'Wizard Staff'),
  createCharacter('Bilbo Baggins', 'Bilbo', 'Hobbit', 'The Shire', 2, 1, 'The Ring'),
  createCharacter('Frodo Baggins', 'Frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Barrow Blade'),
  createCharacter('Aragorn sonn of Arathorn', 'Aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'),
  createCharacter('Legolas', 'Legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow')
];

console.log(lotrCharacters);
console.log('----------');

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};


const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

// write a function findOne() that takes the following two arguments
// arr - array of Heroes objects to search through
// query - object with one or more key/value pairs
// the first matching result should be returned even if multiple match
// if a match isn't found return null
// query needs to be an object
// expressions are evaluated and produces values
// function calls are also expressions


const findOne = (arr, query) => {
  let x = arr.find(element => {
    for(let key in query){
      if(element[key]!== query[key]){
        return false;
      } 
    } 
    return true;
  });

  return x || null;
};
console.log(findOne(HEROES,{ id: 2, name: 'Aquaman' })); // Object literal
console.log('---------');

function returnKeyValue (object) {
  let propertyNames = Object.getOwnPropertyNames(object);
  //console.log(propertyNames);

  let keyValue = '';
  for (let i = 0; i < propertyNames.length; i++) {
    let key = `${propertyNames[i]}`;
    let value = object[key];
    keyValue += `${key}: ${value}\n`;
  }
  keyValue = keyValue.slice(0, -1);
  return keyValue;
  // return `${key}: ${value}`;
  // return `${Object.getOwnPropertyNames(userInput)}: ${userInput.value}`;
}

console.log(returnKeyValue(newChr1));


console.log(Object.keys(object1));
// expected output: ["a", "b", "c"]


const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },

  findOne: function (query) {
    console.log(this.store);
    let x = this.store.heroes.find(element => {
      for(let key in query){
        if(element[key]!== query[key]){
          return false;
        } 
      } 
      return true;
    });
    return x || null;
  }
};

console.log(Database.findOne({ id: 2}));

// By default when pass function
// when the function is called, that's where "this" is set
// Bound Function
// Arrow functions are always bound
// Lexical scope = bound to where it is in the file
// 