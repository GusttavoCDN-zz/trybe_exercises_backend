import RestaurantService from '../services/RestaurantService';
import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';

class RestaurantController {
  private restaurantService = new RestaurantService();

  public getAll = async (req: Request, res: Response): Promise<void> => {
    const restaurants = await this.restaurantService.getAll();
    res.status(StatusCodes.OK).json(restaurants);
  };

  public getOne = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    const restaurant = await this.restaurantService.getOne(id);
    res.status(StatusCodes.OK).json(restaurant);
  };

  public create = async (req: Request, res: Response): Promise<void> => {
    const restaurant = req.body;
    const createdRestaurant = await this.restaurantService.create(restaurant);
    res.status(StatusCodes.CREATED).json(createdRestaurant);
  };

  public update = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    const restaurant = req.body;
    const updatedRestaurant = await this.restaurantService.update(id, restaurant);
    res.status(StatusCodes.OK).json(updatedRestaurant);
  };

  public delete = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    await this.restaurantService.delete(id);
    res.status(StatusCodes.NO_CONTENT).end();
  };
}

export default new RestaurantController();
