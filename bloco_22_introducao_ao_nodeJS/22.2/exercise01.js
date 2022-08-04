// Crie uma função que receba três parâmetros e retorna uma Promise.
// Escreva um código para consumir a função construída no exercício anterior.

function sumThreePromisse(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      reject(new Error('Informe apenas números'));

    const result = (a + b) * c;

    if (result < 4000) reject(new Error('Valor muito baixo'));
    resolve(result);
  });

  return promise;
}

const randomNumber = () => Math.floor(Math.random() * 100 + 1);
const numbers = [randomNumber(), randomNumber(), randomNumber()];

sumThreePromisse(...numbers)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));
