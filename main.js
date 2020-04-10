// import { Character } from './character.js';
// import { Vampire } from './vampire.js';
// import { Gameboard } from './gameboard.js';
// console.log(Character);
// console.log(Vampire);

let character = new Character("Cherry", 20)
let vampire2 = new  Vampire('Jojo', 20)
console.log(vampire2.takeDamage(20));
console.log(character.selfHeal(2));

console.log(vampire2.sayName());

let gameboard = new Gameboard();
console.log(gameboard.rollDice());
console.log(gameboard.rollDice());
console.log(gameboard.rollDice());
console.log(gameboard.rollDice());
console.log(gameboard.rollDice());
console.log(gameboard.rollDice());