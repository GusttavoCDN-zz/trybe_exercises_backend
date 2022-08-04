const readline = require('readline-sync');

const weight = readline.questionInt('Qual seu peso? ');
const height = readline.questionFloat('Qual sua altura? ');

const imc = weight / height ** 2;

console.log(`Seu IMC é ${imc.toFixed(2)}`);

if (imc < 18.5) console.log('Abaixo do peso');
else if (imc < 25) console.log('Peso ideal');
else if (imc < 30) console.log('Sobrepeso');
else if (imc < 35) console.log('Obesidade grau I');
else if (imc < 40) console.log('Obesidade grau II');
else console.log('Obesidade grau III');
