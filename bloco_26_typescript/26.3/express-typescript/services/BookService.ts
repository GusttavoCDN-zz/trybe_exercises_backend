import Book from '../database/models/Book';
import IBook from '../interfaces/book';
import Joi from 'joi';

class BookService {
  public getAll = async (): Promise<Book[]> => {
    const books = await Book.findAll({ raw: true });
    return books;
  };

  public getById = async (id: number) => {
    const book = await Book.findByPk(id, { raw: true });
    if (!book) throw new Error('NotFoundError');
    return book;
  };

  public create = async (book: IBook) => {
    const { error } = this.validateBook(book);

    if (error) throw new Error('ValidationError');

    const newBook = await Book.create(book);
    return newBook;
  };

  public update = async (id: number, book: IBook) => {
    const { error } = this.validateBook(book);

    if (error) throw new Error('ValidationError');

    await Book.update(book, { where: { id } });
    return { id, ...book } as Book;
  };

  public delete = async (id: number) => {
    const book = await Book.findByPk(id);
    if (!book) throw new Error('NotFoundError');

    await Book.destroy({ where: { id } });
    return book;
  };

  private validateBook = (book: IBook) => {
    const schema = Joi.object({
      title: Joi.string().min(3).max(30).required(),
      price: Joi.number().min(0).required(),
      author: Joi.string().min(3).max(30).required(),
      isbn: Joi.string().min(3).max(30).required(),
    });

    return schema.validate(book);
  };
}

export default BookService;
