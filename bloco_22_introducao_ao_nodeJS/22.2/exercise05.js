// Crie um script que mostre na tela o conteúdo de um arquivo escolhido pela pessoa usuária:
const readline = require('node:readline/promises');
const fs = require('fs/promises');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

async function ask() {
  try {
    const file = await rl.question('Qual arquivo você deseja ler? ');
    const fileContent = await fs.readFile(`${file}.txt`, 'utf-8');

    console.log(fileContent);
  } catch (error) {
    console.log(error.message);
  } finally {
    rl.close();
  }
}

function main() {
  ask();
}

main();
