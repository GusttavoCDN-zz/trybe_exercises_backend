const { expect } = require('chai');
const numberType = require('../src/numberType');

describe('Verifica se um número é positivo, negativo ou netro', () => {
  describe('Quando o número é maior que 1', () => {
    it('Deve retornar positivo', () => {
      const output = numberType(1);
      expect(output).to.be.equals('Positivo');
    });
  });

  describe('Quando o número é menor que -1', () => {
    it('Deve retornar negativo', () => {
      const output = numberType(-1);
      expect(output).to.be.equals('Negativo');
    });
  });

  describe('Quando o número é igual a 0', () => {
    it('Deve retornar neutro', () => {
      const output = numberType(0);
      expect(output).to.be.equals('Neutro');
    });
  });

  describe('Quando o valor informado não é um número', () => {
    it('Deve retornar um erro', () => {
      expect(() => numberType('teste')).to.throws('O valor informado não é um número');
    });
  });
});
