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
  if (firstLetter === 'a' || firstLetter === 'b' || firstLetter === 'c' || firstLetter === 'd'){
    let code = cipher[firstLetter];
    return word.slice(code-1, code) || ' ';
  }
  return '-';
};

console.log(decode('ee'));

let stringToArray = function (str) {
  return str.trim().split(' ');
};

const someWords = 'the cats and the dogs inside arabian cabals become aware of the rewind apple bloom';

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


const heros = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

const findOne = (array, query) => {
  array.find(item => {
    return item === query;
  });
};

console.log(findOne(heros, 'id: 1'));