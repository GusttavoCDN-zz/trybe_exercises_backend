// ./src/interfaces/IModel.ts

interface IModel<T> {
  create(obj: T): Promise<T>;
  readOne(id: string): Promise<T | null>;
  read(): Promise<T[]>
  update(id: string, obj: T): Promise<T | null>;
}

export default IModel;
