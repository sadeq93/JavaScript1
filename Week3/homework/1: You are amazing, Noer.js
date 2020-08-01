'use strict'
const giveCompliment = (yourName)=> {
let compliments = [
    "great",
    "awesome",
    "On a scale from 1 to 10, you’re an 100",
    "a great listener",
    "Aside from food. You’re my favorite",
    "That color is perfect on you",
    "stunning",
    "cool",
    "the best",
    "one of a kind!",
];
let compliment = Math.floor(Math.random() * compliments.length)
return `You are ${compliments[compliment]}, ${yourName}!`;
}
console.log(giveCompliment("Sadeq"));
console.log(giveCompliment("Hadeer"));
console.log(giveCompliment("Iya"));