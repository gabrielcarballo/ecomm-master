import { NextFunction, Request, Response } from 'express';
import errorMap from './schemas/validationsErrorMap';
import BusinessAccountSchema from './schemas/BusinessAccountSchema';

const BusinessAccountValidation = (
  async (req: Request, res: Response, next: NextFunction) => {
    const { error } = BusinessAccountSchema.validate(req.headers);
    if (error) {
      return res.status(errorMap(error.details[0].type))
        .json({ error: error.details[0].message });
    }
    next();
  });

export default BusinessAccountValidation;
