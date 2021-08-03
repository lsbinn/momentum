let a = 2;      // 변경 가능
const b = 3;    // 변경 불가능
let myName = "bin";

a = 10;

console.log(a + b);
console.log("Hello " + myName);

myName = "seulbin";

console.log("Hello " + myName);

/* Always const Sometimes let Never var */

const amIFat = null;
let something;

console.log(something, amIFat);
/* true, false, null, undefined */

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]

// Get Item from Array
console.log(daysOfWeek);

// Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);

daysOfWeek.pop();
console.log(daysOfWeek);

const toBuy = ["potato", "tomato", "pizza"];
console.log(toBuy[2]);
toBuy.push("kimbab");

const playerName = "bin";
const playerPoints = 12122;
const playerHandsome = true;
const playerFat = "little bit";

const player = {
    name: "bin",
    points: 10,
    handsome: true,
};
console.log(player);
player.lastName = "potato";
console.log(player);