import Restaurant from '../database/models/Restaurant';
import throwCustomError from '../../utils/throwCustomError';
import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';
import { AddRestaurant, IRestaurant, UpdateRestaurant } from '../types/restaurant';

class RestaurantService {
  public getAll = async (): Promise<Restaurant[]> => {
    const restaurants = await Restaurant.findAll({ raw: true });
    return restaurants;
  };
  
  public getOne = async (id: number): Promise<Restaurant> => {
    const restaurant = await Restaurant.findByPk(id, { raw: true });
    if (!restaurant)
      return throwCustomError(StatusCodes.NOT_FOUND, 'Restaurant not found');

    return restaurant;
  };

  public create = async (restaurant: AddRestaurant): Promise<Restaurant> => {
    const { error } = this.validateRestaurant(restaurant);
    if (error) return throwCustomError(StatusCodes.BAD_REQUEST, error.message);

    const createdRestaurant = await Restaurant.create(restaurant, { raw: true });
    return createdRestaurant;
  };

  public update = async (
    id: IRestaurant['id'],
    restaurant: UpdateRestaurant
  ): Promise<Restaurant> => {
    if (Object.keys(restaurant).length === 0)
      return throwCustomError(StatusCodes.BAD_REQUEST, 'No data to update');

    if (await !this.exists({ id }))
      return throwCustomError(StatusCodes.NOT_FOUND, 'Restaurant not found');

    await Restaurant.update(restaurant, { where: { id } });
    const updatedRestaurant = (await Restaurant.findByPk(id, {
      raw: true,
    })) as Restaurant;
    return updatedRestaurant;
  };

  public delete = async (id: IRestaurant['id']): Promise<void> => {
    if (await !this.exists({ id }))
      return throwCustomError(StatusCodes.NOT_FOUND, 'Restaurant not found');

    await Restaurant.destroy({ where: { id } });
  };

  private validateRestaurant = (restaurant: AddRestaurant) => {
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      category: Joi.string().min(3).max(30).required(),
      openingTime: Joi.string().min(3).max(30).required(),
      closingTime: Joi.string().min(3).max(30).required(),
    });

    return schema.validate(restaurant);
  };

  private exists = async (options = {}): Promise<boolean> => {
    const restaurant = await Restaurant.findOne({ where: options });
    return !!restaurant;
  };
}

export default RestaurantService;
