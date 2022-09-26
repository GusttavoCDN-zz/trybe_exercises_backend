import { BookDTO } from './IBook';

export default class Book implements BookDTO {
  public title!: string;

  public publisher!: string;

  public author!: string;

  public pages?: number | undefined;

  constructor(book: BookDTO) {
    if (!Book.validateValues(book.title, book.publisher, book.author)) {
      throw new Error('Invalid values');
    }

    this.title = book.title;
    this.publisher = book.publisher;
    this.author = book.author;
    this.pages = book.pages;
  }

  static validateValues(title: string, publisher: string, author: string): boolean {
    if (!title || !publisher || !author) return false;
    return true;
  }
}
