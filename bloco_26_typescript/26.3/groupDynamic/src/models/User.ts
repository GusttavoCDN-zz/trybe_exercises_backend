import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { User, AddUser } from '../interfaces/user.interface';

class UserModel {
  private connection: Pool = connection;

  public getAll = async (): Promise<User[]> => {
    const [result] = await this.connection.execute('SELECT * FROM Users');
    return result as User[];
  };

  public getOne = async (id: User['id']): Promise<User> => {
    const [[result]] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Users where id = ?',
      [id]
    );
    return result as User;
  };

  public create = async ({ email, name, password }: AddUser): Promise<User> => {
    const query =
      'INSERT INTO TypeSCriptExpress.Users (name, email, password) VALUES (?, ?, ?)';
    const [{ insertId: id }] = await this.connection.execute<ResultSetHeader>(query, [
      name,
      email,
      password,
    ]);

    return { id, name, email, password } as User;
  };

  public update = async (
    { email, name, password }: AddUser,
    userId: User['id']
  ): Promise<User> => {
    const query =
      'UPDATE TypeSCriptExpress.Users SET name = ?, email = ?, password = ? where id = ? ';
    const [{ insertId: id }] = await this.connection.execute<ResultSetHeader>(query, [
      name,
      email,
      password,
      userId,
    ]);

    return { name, email, password } as User;
  };

  public delete = async (id: User['id']) => {

  }
}

export default UserModel;
