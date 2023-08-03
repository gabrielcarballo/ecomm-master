import { NextFunction, Request, Response } from 'express';
import errorMap from '../../utils/ErrorMap/accountErrorMap';
import personalAccountSchema from './schemas/PersonalAccountSchema';

// interface ValidationResponse {
//   type: string,
//   message: string,
// }

const PersonalAccountValidation = (
  async (req: Request, res: Response, next: NextFunction) => {
    const { error } = personalAccountSchema.validate(req.body);
    if (error) {
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
