export interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
}

export type AddUser = Omit<IUser, 'id'>;
export type UpdateUser = Partial<Omit<IUser, 'id'>>;
export type Credentials = Pick<IUser, 'email' | 'password'>;
