export interface IProduct {
  id?: number;
  name: string;
  brand: string;
  price: number;
  manufacturingDate: Date;
  expirationDate: Date;
}

export type AddProduct = Omit<IProduct, 'id'>;
export type UpdateProduct = Partial<Omit<IProduct, 'id'>>;
