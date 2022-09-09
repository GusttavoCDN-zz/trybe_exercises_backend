export interface IRestaurant {
  id: number;
  name: string;
  category: string;
  openiningTime: string;
  closingTime: string;
}

export type AddRestaurant = Omit<IRestaurant, 'id'>;
export type UpdateRestaurant = Partial<AddRestaurant>;
