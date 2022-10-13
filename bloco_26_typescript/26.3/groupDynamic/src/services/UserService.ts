import UserModel from '../models/User';
import { User, AddUser } from '../interfaces/user.interface';

export default class UserService {
  private model = new UserModel();

  public getAll = async (): Promise<User[]> => {
    return await this.model.getAll();
  };

  public getOne = async (id: User['id']): Promise<User> => {
    return await this.model.getOne(id);
  };

  public create = async (user: AddUser): Promise<User> => {
    return await this.model.create(user);
  };

  public update = async (user: AddUser, userId: User['id']): Promise<User> => {
    return await this.model.update(user, userId);
  };
}
