import Book from '../entities/Book';
import { BookDTO, IBook } from '../entities/IBook';
import { IRepository } from '../repositories/IRepository';
import { IService } from './IService';

export default class BooksService implements IService<BookDTO> {
  constructor(private repository: IRepository<IBook>) {}

  public getAll = async (): Promise<IBook[]> => this.repository.getAll();

  public getById = async (id: string): Promise<IBook | undefined | null> =>
    this.repository.getById(id);

  public create = async (entity: BookDTO): Promise<IBook> => {
    const { author, publisher, title, pages } = new Book({
      author: entity.author,
      publisher: entity.publisher,
      title: entity.title,
      pages: entity.pages,
    });

    const book = await this.repository.create({
      author,
      publisher,
      title,
      pages,
    });

    return book;
  };

  public update = async (id: string, entity: BookDTO): Promise<IBook> => {
    const { author, publisher, title, pages } = new Book({
      title: entity.title,
      author: entity.author,
      publisher: entity.publisher,
      pages: entity.pages,
    });

    const book = await this.repository.update(id, {
      author,
      publisher,
      title,
      pages,
    });

    return book;
  };

  public delete = async (id: string): Promise<void> => this.repository.delete(id);
}
