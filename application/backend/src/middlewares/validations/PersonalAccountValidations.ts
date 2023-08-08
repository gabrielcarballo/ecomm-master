import { NextFunction, Request, Response } from 'express';
import errorMap from '../../utils/ErrorMap/accountErrorMap';
import personalAccountSchema from './schemas/PersonalAccountSchema';

// interface ValidationResponse {
//   type: string,
//   message: string,
// }

const PersonalAccountValidation = (
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password, cpf, name } = req.headers;
    console.log('validation', req.headers);
    console.log('types', typeof email, typeof password, typeof cpf, typeof name);
    const { error } = personalAccountSchema.validate(req.headers);
    if (error) {
      console.log('error', error);
      return res.status(errorMap(error.details[0].type))
        .json({ error: error.details[0].message });
      // return {
      //   type: 'INVALID_FIELDS',
      //   message: error.details[0].message,
      // } as ValidationResponse;
    }
    next();
  });

export default PersonalAccountValidation;
