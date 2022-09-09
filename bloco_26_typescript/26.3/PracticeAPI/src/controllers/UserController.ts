import UserService from '../services/UserService';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

class UserController {
  private userService = new UserService();

  public getAll = async (_req: Request, res: Response): Promise<void> => {
    const users = await this.userService.getAll();
    res.status(StatusCodes.OK).json(users);
  };

  public getOne = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const user = await this.userService.getOne(Number(id));
    res.status(StatusCodes.OK).json(user);
  };

  public create = async (req: Request, res: Response): Promise<void> => {
    await this.userService.create(req.body);
    res.status(StatusCodes.CREATED).json({ message: 'User created' });
  };

  public update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const user = await this.userService.update(Number(id), req.body);
    res.status(StatusCodes.OK).json(user);
  };

  public delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    await this.userService.delete(Number(id));
    res.status(StatusCodes.NO_CONTENT).json({ message: 'User deleted' });
  };
}

export default new UserController();
