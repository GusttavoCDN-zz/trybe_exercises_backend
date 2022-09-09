import { Request, Response, NextFunction } from 'express';
import ICustomError from '../src/types/customError';
import { StatusCodes } from 'http-status-codes';

const handleErrors = (
  error: ICustomError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (error.code && error.message) {
    res.status(error.code).json({ message: error.message });
  }

  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: 'Internal server error' });
};

export default handleErrors;
