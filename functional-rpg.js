// // this practice to rebuild functional plant app but store state
// let character = {}
// let obj = {}


// const storeState = () => {
//   let currentState = {};
//   return (stateChangeFunction) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   }
// }

// const changeState = (prop) => {
//   return (value) => {
//     return (obj) => ({
//       ...obj,
//       [prop]: (obj[prop] || 0 ) + value
//     })
//   }
// }


// // const blueFood = changeState("health")(5);
// const superPotion = changeState("health")(10);
// const damage = changeState("health")(-5);


// const stateChanger = storeState();


// const takeDamage = stateChanger(damage);
// const increaseHealth = stateChanger(superPotion);


// console.log(takeDamage);
// console.log(increaseHealth);

const canTrain = (player) => ({
  train: (train) => {
    return `The ${player.name} is going to ${train}.`
  }
});

const canBattle = (player) => ({
  battle: () => {
    return `The ${player.name} is battling.`
  }
});

const trainBattlePlayer = (name) => {
  let player = {
    name
  }

  return { ...player, ...canTrain(player), ...canBattle(player) };
};

const player1 = canTrain("Rex");
console.log(player1);