import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import authMiddleware from '../auth/authMiddleware';
import BusinessAccountController from '../layers/controllers/BusinessAccountController';
import BusinessAccountValidations from '../middlewares/validations/BusinessAccountValidations';

const BusinessAccountRouter = express.Router();

BusinessAccountRouter.post(
  '/create',
  (req: Request, res: Response, next: NextFunction) =>
    BusinessAccountValidations(req, res, next),
  (req: Request, res: Response, next: NextFunction) =>
    BusinessAccountController.createAccount(req, res, next)
  ,
);

BusinessAccountRouter.post(
  '/login',
  (req: Request, res: Response, next: NextFunction) =>
    BusinessAccountController.loginUser(req, res, next),
);

BusinessAccountRouter.patch(
  '/update',
  (req: Request, res: Response, next: NextFunction) =>
    authMiddleware(req, res, next),
  (req: Request, res: Response, next: NextFunction) =>
    BusinessAccountController.updateAccount(req, res, next),
);

export default BusinessAccountRouter;
