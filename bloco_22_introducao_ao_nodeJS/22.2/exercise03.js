//  Realize o download deste arquivo e salve-o como simpsons.json. Utilize o arquivo baixado para realizar os requisitos abaixo.

const fs = require('fs/promises');

async function readFile(file) {
  const data = await fs.readFile(file, 'utf-8');
  return data;
}

// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
async function allCharacters() {
  const chars = await readFile('./simpsons.json');
  const charsArray = JSON.parse(chars);

  charsArray.forEach(({ id, name }) => {
    console.log(`${id} - ${name}`);
  });
}

// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
async function getChar(id) {
  const data = await readFile('./simpsons.json');
  const chars = JSON.parse(data);

  const char = chars.find(({ id: charID }) => Number(charID) === id);
  if (!char) throw new Error('id não encontrado');

  return char;
}

// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
async function deleteIDs() {
  const data = await readFile('./simpsons.json');
  const chars = JSON.parse(data);

  const newChars = chars.filter((char) => ![10, 6].includes(Number(char.id)));
  fs.writeFile('./simpsons.json', JSON.stringify(newChars))
    .then(() => console.log('Escrito com sucesso'))
    .catch((error) => console.log(error.message));
}

// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
async function getSimpsonsFamily() {
  const data = await readFile('./simpsons.json');
  const chars = JSON.parse(data);

  const simpsonFamily = chars.filter(({ id }) => id < 5);

  fs.writeFile('./getSimpsonsFamily.json', JSON.stringify(simpsonFamily))
    .then(() => console.log('Arquivo Criado com sucesso'))
    .catch((error) => console.log(error.message));
}

// getSimpsonsFamily();

// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
async function addMemberToSimpsonsFamily() {
  const data = await readFile('./getSimpsonsFamily.json');
  const chars = JSON.parse(data);

  const newMember = chars.find(({ name }) => name === 'Nelson Muntz');
  const family = [...chars, newMember];

  fs.writeFile('./getSimpsonsFamily.json', JSON.stringify(family), { flag: 'w' })
    .then(() => console.log('Membro adicionado com sucesso'))
    .catch((error) => console.log('Erro ao adicionar Membro'));
}

// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  // Filtramos o array para remover o personagem Nelson
  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

  // Criamos um novo Array contendo a personagem Maggie
  const simpsonsWithMaggie = simpsonsWithoutNelson
    .concat([{ id: '15', name: 'Maggie Simpson' }]);
  // com spread seria assim: 
  // const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]

  // Escrevemos o novo array no arquivo e retornamos a promise de escrita
  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
}