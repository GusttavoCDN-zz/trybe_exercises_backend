// Crie um script que substitua uma palavra por outra em um arquivo escolhido pela pessoa usuária:
const readline = require('node:readline');
const fs = require('fs/promises');
const { stdin: input, stdout: output } = require('node:process');

function question(message) {
  const rl = readline.createInterface({ input, output });
  const promisse = new Promise((resolve) => {
    rl.question(message, (anwser) => {
      rl.close();

      resolve(anwser);
    });
  });

  return promisse;
}

async function replaceWords() {
  try {
    const file = await question('Qual arquivo você deseja ler? ');
    const fileContent = await fs.readFile(file, 'utf-8');

    const wordToReplace = await question('Qual palavra você deseja substituir? ');

    const newWord = await question('Qual a nova palavra? ');

    const newFileContent = fileContent.replace(new RegExp(wordToReplace, 'g'), newWord);
    console.log(`Conteudo do novo arquivo: \n ${newFileContent}`);

    const newFile = await question('Qual o nome do arquivo de destino? ');

    await fs.writeFile(`${newFile}.txt`, newFileContent);
  } catch (error) {
    console.log(error.message);
  }
}

function main() {
  replaceWords();
}

main();
