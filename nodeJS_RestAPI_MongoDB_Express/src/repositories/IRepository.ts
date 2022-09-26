export interface IRepository<T> {
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T | undefined | null>;
  create(entity: Omit<T, 'id'>): Promise<T>;
  update(id: string, entity: Omit<T, 'id'>): Promise<T>;
  delete(id: string): Promise<void>;
}
