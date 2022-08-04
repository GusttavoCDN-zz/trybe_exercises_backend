const readline = require('readline-sync');


function fibonnaci(number) {
  if (number < 0) return -1;
  if (number === 0) return 0;
  if (number === 1 ) return 1;
  return fibonnaci(number - 1) + fibonnaci(number - 2);
};

function main() {
  const number = readline.questionInt('Escolha um número para calcular: ');
  const calc = fibonnaci(number);

  console.log(`O número passado é o ${calc} na sequencia de Fibbonaci`);
};

main();