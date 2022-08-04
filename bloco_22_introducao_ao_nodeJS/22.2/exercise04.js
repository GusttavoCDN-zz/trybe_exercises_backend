// Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
const fs = require('fs/promises');

const words = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

async function promiseAllTest() {
  try {
    const filePromises = words.map((word, index) => fs.writeFile(`./file${index + 1}.txt`, word));
    
    await Promise.all(filePromises);

    const content = await Promise.all([
      fs.readFile('./file1.txt', 'utf-8'),
      fs.readFile('./file2.txt', 'utf-8'),
      fs.readFile('./file3.txt', 'utf-8'),
      fs.readFile('./file4.txt', 'utf-8'),
      fs.readFile('./file5.txt', 'utf-8'),
    ]);

    await fs.writeFile('./fileAll.txt', content.join(' '));
  } catch (error) {
    console.log(error.message);
  }
}

promiseAllTest();
