//interface pelo Terminal
//precisa instalar o prompt-syncmódulo usando NPM

const prompt = require("prompt-sync")();

const input = prompt("What is your name? ");

console.log(`Oh, so your name is ${input}`);