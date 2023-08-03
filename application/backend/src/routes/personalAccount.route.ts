import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import PersonalAccountController from '../layers/controllers/PersonalAccountController';
import PersonalAccountValidation from '../middlewares/validations/PersonalAccountValidations';

const PersonalAccountRouter = express.Router();

PersonalAccountRouter.post(
  '/create',
  (req: Request, res: Response, next: NextFunction) =>
    PersonalAccountValidation(req, res, next),
  (req: Request, res: Response, next: NextFunction) =>
    PersonalAccountController.createAccount(req, res, next)
  ,
);

export default PersonalAccountRouter;
