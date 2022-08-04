// Reescreva o código do exercício anterior para que utilize async/await.

const randomNumber = () => Math.floor(Math.random() * 100 + 1);
const numbers = [randomNumber(), randomNumber(), randomNumber()];

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


async function main() {
  try {
    const result = await sumThreePromisse(...numbers);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

main();
