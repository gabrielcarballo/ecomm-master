import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
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

export default BusinessAccountRouter;
