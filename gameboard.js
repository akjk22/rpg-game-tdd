export class Gameboard {
    constructor() {
        this.redSquare = [2,5,8,12,15,20,23,25,29,35];
        this.greenSquare = [1,3,7,10,14,17,21,26,30,32];
    }
    rollDice() {
        return(Math.floor(Math.random()*6+1));
    }
    // takeTurn() {
    //     let spaces = this.rollDice();
    // }

    isRedSquare(square) {
        if (this.redSquare.includes(square)) {
            return true;
        }
        return false;
    }
    isGreenSquare(square) {
        if (this.greenSquare.includes(square)) {
            return true;
        }
       return false;
    }

}