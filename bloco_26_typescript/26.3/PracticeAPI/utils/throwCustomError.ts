import ICustomError from '../src/types/customError';

export default async (code: number, message: string) => {
  const error = new Error() as ICustomError;
  error.code = code;
  error.message = message;
  throw error;
};
