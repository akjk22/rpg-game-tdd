export class Character {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }

    selfHeal(points) {
        this.hp += points;
        return this.hp;
    }
    takeDamage(points) {
        if (points >= this.hp) {
            this.hp = 1;
            return this.hp;
        } else {
            this.hp -= points;
            return this.hp;
        }

    }
    sayName() {
        console.log(`Hi my name is ${this.name}`);
    }
}