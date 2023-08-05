import { NextFunction, Request, Response } from 'express';
import PersonalAccountService from '../services/PersonalAccountService';

export default class PersonalAccountController {
  public static async createAccount(req: Request, res: Response, _next: NextFunction) {
    console.log('controller', req.body);

    try {
      const account = await PersonalAccountService.createAccount(req.body);
      console.log('controller', account);
      if (account) {
        return res.status(201).json(
          { message: 'Account created successfully', content: account },
        );
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error });
    }
  }
}
