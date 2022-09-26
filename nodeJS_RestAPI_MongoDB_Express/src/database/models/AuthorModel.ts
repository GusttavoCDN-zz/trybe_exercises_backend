import { Schema, model } from 'mongoose';

const authorSchema = new Schema({
  id: { type: String },
  name: { type: String, required: true },
  nationality: { type: String },
});

const Author = model('Author', authorSchema, 'Authores');

export default Author;
