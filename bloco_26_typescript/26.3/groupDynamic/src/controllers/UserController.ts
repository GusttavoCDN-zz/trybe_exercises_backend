import { User } from '../interfaces/user.interface';
import UserService from '../services/UserService';
import { Request, Response } from 'express';

export default class UserController {
  private service = new UserService();

  public getAll = async (req: Request, res: Response) => {
    const users = await this.service.getAll();
    res.status(200).json(users);
  };

  public getOne = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await this.service.getOne(Number(id));
    res.status(200).json(user);
  };

  public create = async (req: Request, res: Response) => {
    const user = await this.service.create(req.body);
    res.status(200).json(user);
  };

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await this.service.update(req.body, Number(id));
    res.status(200).json({ id, user });
  };
}
