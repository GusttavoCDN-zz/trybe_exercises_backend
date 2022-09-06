import { Pool, ResultSetHeader } from 'mysql2/promise';

export interface Book {
  id?: number;
  title: string;
  price: number;
  author: string;
  isbn: string;
}

export default class BookModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll() {
    const result = await this.connection.execute('SELECT * FROM books');
    const [rows] = result;
    return rows as Book[];
  }

  public async create(book: Book): Promise<Book> {
    const query = 'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)';
    const [{ insertId: id }] = await this.connection.execute<ResultSetHeader>(query, [
      book.title,
      book.price,
      book.author,
      book.isbn,
    ]);
    return { id, ...book };
  }
}
