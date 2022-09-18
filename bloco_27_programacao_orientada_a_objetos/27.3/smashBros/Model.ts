export interface IModel {
  getAll(): Promise<any>;
  getOne(id: number): Promise<any>;
  create(data: any): Promise<any>;
  update(id: number, data: any): Promise<any>;
  delete(id: number): Promise<any>;
}

export class LocalDbModel implements IModel {
  getAll(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getOne(id: number): Promise<any> {
    throw new Error('Method not implemented.');
  }
  create(data: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  update(id: number, data: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<any> {
    throw new Error('Method not implemented.');
  }
}

export class MockedDbModel implements IModel {
  async getAll(): Promise<any> {
    console.log('Mock getAll');
  }

  async getOne(id: number): Promise<any> {
    console.log('Mock getOne');
  }

  async create(data: any): Promise<any> {
    console.log('Mock create');
  }

  async update(id: number, data: any): Promise<any> {
    console.log('Mock update');
  }

  async delete(id: number): Promise<any> {
    console.log('Mock delete');
  }
}
