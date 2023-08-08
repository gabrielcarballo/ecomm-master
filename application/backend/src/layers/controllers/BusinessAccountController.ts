import { NextFunction, Request, Response } from 'express';
import BusinessAccountService from '../services/BusinessAccountService';
import { BusinessAccountAtt } from '../../middlewares/validations/schemas/BusinessAccountSchema';

export default class BusinessAccountController {
  public static async createAccount(
    req: Request,
    res: Response,
    _next: NextFunction,
  ) {
    const { name, cnpj, email, password } = req.headers as unknown as BusinessAccountAtt;
    const account = await BusinessAccountService.createAccount({ name, cnpj, email, password });

    return res.status(201).json(
      { message: 'Account created successfully', content: account },
    );
  }
}
