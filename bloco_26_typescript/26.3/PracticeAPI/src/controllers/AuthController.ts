import AuthService from '../services/AuthService';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

class AuthController {
  private authService = new AuthService();

  public login = async (req: Request, res: Response) => {
    const token = await this.authService.login(req.body);
    res.status(StatusCodes.OK).json({ token });
  };
}

export default new AuthController();
