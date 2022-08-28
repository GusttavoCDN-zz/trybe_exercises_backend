/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable no-unused-expressions */
/* eslint-disable mocha/no-setup-in-describe */
const { expect } = require('chai');
const { stub } = require('sinon');

const { Book } = require('../../models');
const BookService = require('../../services/BooksServices');

const testBook = {
  id: 1,
  title: 'Lord of the Rings',
  author: 'J. R. R. Tolkien',
  pageQuantity: 1178,
  createdAt: '2001-09-28 01:00:00',
  updatedAt: '2001-09-28 01:00:00',
};

describe('BookService', function () {
  describe('#getAll', function () {
    const findAllStub = stub(Book, 'findAll');
    let books;

    describe('quando não existe nenhum livro cadastrado', function () {
      before(async function () {
        findAllStub.resolves([]);
        books = await BookService.getAll();
      });

      after(function () {
        findAllStub.reset();
      });

      it('called Book.findAll', function () {
        expect(Book.findAll.calledOnce).to.be.equals(true);
      });

      it('a resposta é um array', function () {
        expect(books).to.be.an('array');
      });

      it('o array está vazio', function () {
        expect(books).to.be.empty;
      });
    });

    describe('quando existem livros cadastrados', function () {
      before(async function () {
        findAllStub.resolves([testBook]);
        books = await BookService.getAll();
      });

      after(function () {
        findAllStub.restore();
      });

      it('called Book.findAll', async function () {
        expect(Book.findAll.calledOnce).to.be.equals(true);
      });

      it('a resposta é um array', async function () {
        expect(books).to.be.an('array');
      });

      it('o array deve retornar objetos', async function () {
        expect(books).to.be.deep.equal([testBook]);
      });
    });
  });

  describe('#getById', function () {
    const findByPkStub = stub(Book, 'findByPk');
    let book;

    describe('quando existe o livro', function () {
      before(async function () {
        findByPkStub.resolves(testBook);
        book = await BookService.getById(1);
      });

      after(function () {
        findByPkStub.reset();
        book = null;
      });

      it('called Book.findByPk', async function () {
        expect(Book.findByPk.calledOnce).to.be.equals(true);
      });

      it('a resposta é um objeto contendo os dados do livro', async function () {
        expect(book).to.deep.equal(testBook);
      });
    });

    describe('quando não existe o livro', function () {
      before(async function () {
        findByPkStub.resolves(null);
        book = await BookService.getById(1000);
      });

      after(function () {
        findByPkStub.reset();
        book = null;
      });

      it('called Book.findByPk', async function () {
        expect(Book.findByPk.calledOnce).to.be.equals(true);
      });

      it('a resposta é um objeto contendo os dados do livro', async function () {
        expect(book).to.be.null;
      });
    });
  });

  describe('#create', function () {
    describe('retorna o registro do livro criado', function () {
      const createStub = stub(Book, 'create');
      const testBook = {
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        pageQuantity: 689,
      };
      let book;

      before(async function () {
        createStub.resolves({
          id: 2,
          ...testBook,
          updatedAt: '2022-01-28T15:45:28.398Z',
          createdAt: '2022-01-28T15:45:28.398Z',
        });

        book = await BookService.create(testBook);
      });

      after(function () {
        createStub.reset();
      });

      it('called Book.create', async function () {
        expect(Book.create.calledOnce).to.be.equals(true);
      });

      it('a resposta é um objeto contendo os dados do livro', async function () {
        expect(book).to.include(testBook); // como o objeto retornado tem menos atributos do que os esperados usamos o matcher include
      });
    });
  });

  describe('#update', function () {
    const updateStub = stub(Book, 'update');

    const testBook = {
      title: 'The Va Cinci Dode',
      author: 'Ban Drown',
      pageQuantity: 589,
    };

    let updated;

    describe('quando existe o livro', function () {
      before(async function () {
        updateStub.resolves([true]);
        updated = await BookService.update(2, testBook);
      });

      after(function () {
        updateStub.reset();
      });

      it('called Book.update', async function () {
        expect(Book.update.calledOnce).to.be.equals(true);
      });

      it('retorna true', async function () {
        expect(updated).to.be.true;
      });
    });

    describe('quando não existe o livro', function () {
      before(async function () {
        updateStub.resolves([false]);
        updated = await BookService.update(1000, testBook);
      });

      after(function () {
        updateStub.reset();
      });

      it('called Book.update', async function () {
        expect(Book.update.calledOnce).to.be.equals(true);
      });

      it('retorna 0', async function () {
        expect(updated).to.be.false;
      });
    });
  });

  describe('#remove', function () {
    const removeStub = stub(Book, 'destroy');

    let removed;

    describe('quando existe o livro', function () {
      before(async function () {
        removeStub.resolves(true);
        removed = await BookService.remove(2);
      });

      after(function () {
        removeStub.reset();
      });

      it('called Book.destroy', async function () {
        expect(Book.destroy.calledOnce).to.be.equals(true);
      });

      it('retorna true', async function () {
        expect(removed).to.be.eq(true);
      });
    });

    describe('quando não existe o livro', function () {
      before(async function () {
        removeStub.resolves(false);
        updated = await BookService.remove(1000);
      });

      after(function () {
        removeStub.reset();
      });

      it('called Book.update', async function () {
        expect(Book.destroy.calledOnce).to.be.equals(true);
      });

      it('retorna false', async function () {
        expect(updated).to.be.eq(false);
      });
    });
  });
});
