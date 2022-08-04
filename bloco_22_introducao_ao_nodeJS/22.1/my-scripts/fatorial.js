const readline = require('readline-sync');

const number = readline.questionInt('Escolha um número para calcular: ');

function fatorial(number) {
  if (number < 1) return console.log('Número ínvalido');
  let index = number;

  while (index-- > 1) number = number * index;  
  console.log(`O resultado é ${number}`);
};

fatorial(number);