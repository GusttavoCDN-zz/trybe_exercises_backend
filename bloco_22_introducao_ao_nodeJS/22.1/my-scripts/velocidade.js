const readline = require('readline-sync');

const distance = readline.questionFloat('Qual a distância? ');
const time = readline.questionFloat('Qual o tempo? ');

const speed = distance / time;

console.log(`Sua velocidade é ${speed.toFixed(2)}`);