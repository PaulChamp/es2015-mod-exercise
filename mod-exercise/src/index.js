import foods from "./foods";
import {choice, remove} from "./helpers";

let food = choice(foods);
console.log(`i would like one ${food}, please.`);
console.log(`here you go: ${food}`);
console.log("delicious, may i have another?");

remove(foods, food);

console.log(`i am sorry, we are all out. we have ${foods.length} left.`);