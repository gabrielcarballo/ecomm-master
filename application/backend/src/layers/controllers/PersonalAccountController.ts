import { NextFunction, Request, Response } from 'express';
import PersonalAccountService from '../services/PersonalAccountService';
import { createToken, payloadType } from '../../auth/index';
import { PersonalAccountAtt } from '../../middlewares/validations/schemas/PersonalAccountSchema';

export default class PersonalAccountController {
  public static async createAccount(req: Request, res: Response, _next: NextFunction) {
    const { name, cpf, email, password } = req.headers as unknown as PersonalAccountAtt;
    const account = await PersonalAccountService.createAccount({ name, cpf, email, password });

    return res.status(201).json(
      { message: 'Account created successfully', content: account },
    );
  }

  public static async loginUser(req: Request, res: Response, _next: NextFunction) {
    const { email, password } = req.headers as payloadType;
    const isUserValid = await PersonalAccountService.loginUser({ email, password });

    if (isUserValid) {
      const token = createToken({ email, password });
      req.headers.authorization = token;
      return res.status(201).json(
        { message: 'Login successfully', content: token },
      );
    }
  }
}
