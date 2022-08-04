const readline = require('readline-sync');

const scripts = ['./imc.js', './velocidade.js', './sorteio.js', './fatorial.js', './fibonacci.js'];
let script;

do {
  script = readline.questionInt(
    'Qual script você deseja executar?\n 1 - Calcular IMC, 2 - Calcular média, 3 - Jogo de adivinhação, 4 - Calcular Fatorial, 5 - Calcular Fibonnaci\n'
  );
} while (script < 1 || script > 3);

require(scripts[script - 1]);