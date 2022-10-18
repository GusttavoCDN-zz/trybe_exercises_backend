// ./src/models/MongoModel.ts

import { isValidObjectId, Model } from 'mongoose';
import IModel from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  public async readOne(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw Error('InvalidMongoId');
    return this._model.findOne({ id });
  }
}

export default MongoModel;
