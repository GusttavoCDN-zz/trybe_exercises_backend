export interface IOrderItem {
  name: string;
  price: number;
}

export class OrderItem implements IOrderItem {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this.price = price;
  }

  public get price(): number {
    return this._price;
  }

  public set price(value: number) {
    if (value >= 0) this._price = value;
    else throw new Error('The price must be a positive number');
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }
}
