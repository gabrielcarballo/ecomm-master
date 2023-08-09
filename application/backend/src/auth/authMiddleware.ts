import { Request, Response, NextFunction } from 'express';
import { verifyToken } from './index';
import { UnauthorizedError } from '../helpers/errorHandler/errorHandler';
import 'express-async-errors';

const authMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new UnauthorizedError('No authorization headers sent');
  }
  const isTokenValid = verifyToken(authorization);
  if (!isTokenValid) {
    throw new UnauthorizedError('Invalid token');
  }
  next();
};

export default authMiddleware;
