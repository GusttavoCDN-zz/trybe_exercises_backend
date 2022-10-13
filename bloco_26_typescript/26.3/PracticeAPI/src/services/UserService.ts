import User from '../database/models/User';
import { AddUser, IUser, Credentials, UpdateUser } from '../types/user';
import { StatusCodes } from 'http-status-codes';
import throwCustomError from '../../utils/throwCustomError';
import Joi from 'joi';
import { hash } from 'bcryptjs';

class UserService {
  public getAll = async () => {
    const users = await User.findAll({ raw: true });
    return users;
  };

  public getOne = async (id: IUser['id']): Promise<User> => {
    const user = await User.findByPk(id, { raw: true });
    if (!user) return throwCustomError(StatusCodes.NOT_FOUND, 'User not found');
    return user;
  };

  public create = async (user: AddUser): Promise<void> => {
    const { error } = await this.validateUser(user);
    if (error) return throwCustomError(StatusCodes.BAD_REQUEST, error.message);

    if (await !!this.exists({ email: user.email }))
      return throwCustomError(StatusCodes.CONFLICT, 'User already exists');

    const hashedPassword = await hash(user.password, 10);
    const newUser = {
      ...user,
      password: hashedPassword,
    };

    await User.create(newUser);
  };

  public update = async (id: IUser['id'], user: UpdateUser): Promise<User> => {
    if (Object.keys(user).length === 0)
      return throwCustomError(StatusCodes.BAD_REQUEST, 'No data to update');

    if (await !this.exists({ id }))
      return throwCustomError(StatusCodes.NOT_FOUND, 'User not found');

    await User.update(user, { where: { id } });
    const updatedUser = (await User.findByPk(id, { raw: true })) as User;
    return updatedUser;
  };

  public delete = async (id: IUser['id']): Promise<void> => {
    if (await !this.exists({ id }))
      return throwCustomError(StatusCodes.NOT_FOUND, 'User not found');

    await User.destroy({ where: { id } });
  };

  private exists = async (options = {}): Promise<boolean> => {
    const user = await User.findOne({ where: options });
    return !!user;
  };

  private validateUser = async (user: AddUser) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    return schema.validate(user);
  };
}

export default UserService;
