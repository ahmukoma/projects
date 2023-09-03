import foods from './foods';
import helpers from './helpers';

let randFruit = helpers.Choice(foods);

console.log(`I'd like one ${randFruit}, please.`);
console.log(`Here you go: ${randFruit}`);
console.log("Delicious! May I have another?");

helpers.Remove(foods, randFruit);
console.log(`I'm sorry, we're all out. We have ${foods} left.`);