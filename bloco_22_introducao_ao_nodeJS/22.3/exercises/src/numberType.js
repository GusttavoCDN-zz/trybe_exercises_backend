function numberType(number) {
  if (typeof number !== 'number') throw new Error("O valor informado não é um número");
  if (number > 0) return 'Positivo';
  if (number < 0) return 'Negativo';
  return 'Neutro';
}

module.exports = numberType;
