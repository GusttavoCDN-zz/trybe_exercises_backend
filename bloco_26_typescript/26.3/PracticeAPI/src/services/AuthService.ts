import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { Credentials } from '../types/user';
import throwCustomError from '../../utils/throwCustomError';
import { StatusCodes } from 'http-status-codes';
import User from '../database/models/User';
import { compare } from 'bcryptjs';

class AuthService {
  private userModel = User;

  public login = async ({ email, password }: Credentials): Promise<string> => {
    if (!email || !password)
      return throwCustomError(StatusCodes.BAD_REQUEST, 'Email and password are required');

    const user = await this.userModel.findOne({ where: { email } });

    if (!user) return throwCustomError(StatusCodes.UNAUTHORIZED, 'Invalid credentials');

    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) return throwCustomError(StatusCodes.UNAUTHORIZED, 'Wrong Password');

    return this.makeToken(email, password);
  };

  private makeToken = (email: string, password: string): string => {
    const userCredentials = { email, password };

    const jwtConfig: jwt.SignOptions = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const secret = process.env.JWT_SECRET || ('secret' as jwt.Secret);

    const token = jwt.sign({ data: userCredentials }, secret, jwtConfig);
    return token;
  };
}

export default AuthService;
