import * as joi from 'joi';

export interface BusinessAccountAtt {
  name: string,
  cnpj: string,
  email: string,
  password: string,
}

const BusinessAccountValidation: joi.ObjectSchema<BusinessAccountAtt> = joi.object({
  name: joi.string().min(3).max(150).required()
    .messages({
      'string.min': 'Name must be at least 3 characters long',
      'string.max': 'Name must be less than or equal to 150 characters long',
      'string.empty': 'Name cannot be empty',
      'any.required': 'Name is a required field',
    }),
  cnpj: joi.string().min(14).max(17).required()
    .messages({
      'string.min': 'CNPJ must be at least 14 characters long',
      'string.max': 'CNPJ must be less than or equal to 17 characters long',
      'string.empty': 'CNPJ cannot be empty',
      'any.required': 'CNPJ is a required field',
    }),
  email: joi.string().email().required()
    .messages({
      'string.email': 'Email must be a valid email',
      'string.empty': 'Email cannot be empty',
      'any.required': 'Email is a required field',
    }),
  password: joi.string().min(5).max(40).required()
    .messages({
      'string.min': 'Password must be at least 5 characters long',
      'string.max': 'Password must be less than or equal to 40 characters long',
      'string.empty': 'Password cannot be empty',
      'any.required': 'Password is a required field',
    }),
  balance: joi.number().min(0),
  accountNumber: joi.string().uuid(),
});

export default BusinessAccountValidation;
