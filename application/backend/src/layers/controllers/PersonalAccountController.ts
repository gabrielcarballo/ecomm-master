import { NextFunction, Request, Response } from 'express';
import PersonalAccountService from '../services/PersonalAccountService';

export default class PersonalAccountController {
  public static async createAccount(req: Request, res: Response, _next: NextFunction) {
    const account = await PersonalAccountService.createAccount(req.body);
    if (account) {
      return res.status(201).json(
        { message: 'Account created successfully', content: account },
      );
    }

    return res.status(500).json({ message: 'Internal server error' });
  }
}
