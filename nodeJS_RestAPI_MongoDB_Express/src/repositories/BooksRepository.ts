import { Model } from 'mongoose';
import { BookDTO, IBook } from '../entities/IBook';
import { IRepository } from './IRepository';

export default class BooksRepository implements IRepository<IBook> {
  private Model: Model<IBook>;

  constructor(model: Model<IBook>) {
    this.Model = model;
  }

  async getAll(): Promise<IBook[]> {
    return this.Model.find();
  }

  async getById(id: string): Promise<IBook | undefined | null> {
    return this.Model.findById(id);
  }

  async create({ title, author, publisher, pages }: BookDTO): Promise<IBook> {
    const book = new this.Model({ title, author, publisher, pages });

    book.save();

    const id = book._id.toString();

    return { id, title, author, publisher, pages };
  }

  async update(id: string, entity: Omit<IBook, 'id'>): Promise<IBook> {
    await this.Model.findByIdAndUpdate(id, entity);

    return { id, ...entity };
  }

  async delete(id: string): Promise<void> {
    await this.Model.findByIdAndDelete(id);
  }
}
