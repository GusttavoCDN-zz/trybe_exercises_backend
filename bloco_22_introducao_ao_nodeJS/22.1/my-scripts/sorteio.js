const readline = require('readline-sync');

let guessedNumber = readline.questionInt('Chute um número de 1 a 10: ');
const randomNumber = Math.floor(Math.random() * 11);

while (guessedNumber !== randomNumber) {
  if (guessedNumber > randomNumber)
  console.log('O número que você escolheu é maior que o número gerado');
  if (guessedNumber < randomNumber)
  console.log('O número que você chutou é menor que o número gerado');
  
  if (guessedNumber !== randomNumber) guessedNumber = readline.questionInt('Chute um número de 1 a 10: ');
}

console.log('Acertou!!!');
