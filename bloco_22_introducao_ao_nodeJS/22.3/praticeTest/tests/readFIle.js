const { expect } = require('chai');
const readfile = require('../readFile');
const sinon = require('sinon');
const fs = require('fs');

const FILE_CONTENT = 'Hello World';

describe('Lê um arquivo', () => {
  describe('Arquivo lido com sucesso', () => {
    before(() => {
      sinon.stub(fs, 'readFileSync').returns(FILE_CONTENT);
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('A saída', () => {
      it('É uma string', () => {
        const output = readfile('teste.txt');
        expect(output).to.be.a('string');
      });

      it('É igual ao conteúdo do arquivo', () => {
        const output = readfile('teste.txt');
        expect(output).to.be.equals(FILE_CONTENT);
      });
    });
  });

  describe('Erro na leitura do arquivo', () => {
    describe('A saída', () => {
      it('É nula', () => {
        const output = readfile('teste.txt');
        expect(output).to.be.null;
      });
    });
  });
});
