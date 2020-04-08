import { Character } from "./character.js";

export class Vampire extends Character {
    constructor(name, hp) {
    super(name, hp);
    this.hp = 20;
    }
}