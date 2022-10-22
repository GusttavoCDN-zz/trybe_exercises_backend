// ./src/models/Frame.ts

import { model as mongooseCreateModel, Schema } from 'mongoose';
import IFrame from '../interfaces/IFrame';
import MongoModel from './MongoModel';

const frameMongooseSchema = new Schema<IFrame>({
  material: String,
  color: String,
}, {
  versionKey: false,
});

class Frame extends MongoModel<IFrame> {
  constructor(model = mongooseCreateModel('Frame', frameMongooseSchema)) {
    super(model);
  }
}

export default Frame;
