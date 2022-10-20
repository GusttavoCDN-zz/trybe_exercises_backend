// ./src/models/Lens.ts

import { model as mongooseModel, Schema } from 'mongoose';
import ILens from '../interfaces/ILens';
import MongoModel from './MongoModel';

const lensMongooseSchema = new Schema<ILens>({
  degree: Number,
  antiGlare: Boolean,
  blueLightFilter: Boolean,
});

class Lens extends MongoModel<ILens> {
  constructor(model = mongooseModel('Lens', lensMongooseSchema)) {
    super(model);
  }
}

export default Lens;
