export interface IService<T> {
  getAll(): Promise<T[]>;
  getOne(id: number): Promise<T | null>;
  getSunnyById(id: number): Promise<T | null>;
  delete(id: number): Promise<number | string>;
  create(data: T): Promise<T>;
  update(data: T, id: number): Promise<T | string>;
}
