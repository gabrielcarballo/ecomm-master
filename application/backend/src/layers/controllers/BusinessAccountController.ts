import { NextFunction, Request, Response } from 'express';
import UpdateAccountRequest from '../../types/updateAccount.request';
import { payloadType, createToken } from '../../auth/index';
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

  public static async loginUser(req: Request, res: Response, _next: NextFunction) {
    const { email, password } = req.headers as payloadType;
    const isUserValid = await BusinessAccountService.loginUser({ email, password });

    if (isUserValid) {
      const token = createToken({ email, password });
      req.headers.authorization = token;
      return res.status(201).json(
        { message: 'Login successfully', content: token },
      );
    }
  }

  public static async updateAccount(req: Request, res: Response, _next: NextFunction) {
    const info = req.headers as unknown as UpdateAccountRequest;
    const account = await BusinessAccountService.updateAccount(info);
    if (account?.[0] === 0) throw new Error('Your account could not be changed');
    return res.status(201).json(
      { message: 'Account updated successfully. Please do login again' },
    );
  }

  public static async deleteAccount(req: Request, res: Response, _next: NextFunction) {
    const { authorization } = req.headers;
    const account = await BusinessAccountService.deleteAccount(authorization || '');
    if (account?.[0] === 0) throw new Error('Your account could not be deleted');
    return res.status(200).json(
      { message: 'Account deleted successfully' },
    );
  }
}
