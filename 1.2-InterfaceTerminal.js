//interface pelo Terminal
//precisa instalar o módulo prompt-sync usando NPM: npm install prompt-sync
//No terminal, digitar node nomeDoArquivo.js

console.clear()
const input = require("prompt-sync")();
var nome = input("Qual é o seu nome? ");
console.log(`Bom dia ${nome}`);