import { NextFunction, Request, Response } from 'express';
import PersonalAccountService from '../services/PersonalAccountService';
import { PersonalAccountAtt } from '../../middlewares/validations/schemas/PersonalAccountSchema';

export default class PersonalAccountController {
  public static async createAccount(req: Request, res: Response, _next: NextFunction) {
    console.log('controller', req.headers);

    try {
      const { name, cpf, email, password } = req.headers as unknown as PersonalAccountAtt;
      const account = await PersonalAccountService.createAccount({ name, cpf, email, password });
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
