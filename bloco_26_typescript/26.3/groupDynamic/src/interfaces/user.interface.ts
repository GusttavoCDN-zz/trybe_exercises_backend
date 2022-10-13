export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export type AddUser = Omit<User, 'id'>;

// Utility Partial torna opcional todas as propriedades do objeto
// https://www.typescriptlang.org/docs/handbook/utility-types.html
export type UpdateUser = Partial<User>;
