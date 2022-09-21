import { Client } from './Client';
import { OrderItem } from './OrderItem';

interface IOrder {
  client: Client;
  orderItems: OrderItem[];
  paymentMethod: string;
  discount: number | null;
  getTotal: () => number;
  getTotalWithDiscount: () => number;
}

class Order implements IOrder {
  private _client: Client;
  private _orderItems: OrderItem[];
  private _paymentMethod: string;
  private _discount: number | null;

  constructor(
    client: Client,
    orderItems: OrderItem[],
    paymentMethod: string,
    discount: number | null = null
  ) {
    this._client = client;
    this._orderItems = orderItems;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  public get client(): Client {
    return this._client;
  }

  public get orderItems(): OrderItem[] {
    return this._orderItems;
  }

  public get paymentMethod(): string {
    return this._paymentMethod;
  }

  public get discount(): number | null {
    return this._discount;
  }

  public getTotal = (): number => {
    return this.orderItems.reduce((total, { price }) => total + price, 0);
  };

  public getTotalWithDiscount = (): number => {
    return this.getTotal() - (this.discount ?? 0);
  };
}

const client = new Client('João');
const sandwich = new OrderItem('Sanduíche Natural', 5.0);
const juice = new OrderItem('Suco de Abacaxi', 5.0);
const dessert = new OrderItem('Gelatina de Uva', 2.5);

const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.1);