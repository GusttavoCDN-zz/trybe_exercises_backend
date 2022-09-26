import { Schema, model } from 'mongoose';
import { IBook } from '../../entities/IBook';

const bookSchema = new Schema<IBook>({
  id: { type: String },
  title: { type: String, required: true },
  publisher: { type: String, required: true },
  author: { type: String, required: true },
  pages: { type: Number },
});

const Book = model<IBook>('Book', bookSchema, 'Books');

export default Book;
