import * as joi from 'joi';

export interface PersonalAccountAtt {
  name: string,
  cpf: string,
  email: string,
  password: string,
}

const PersonalAccountValidation: joi.ObjectSchema<PersonalAccountAtt> = joi.object({
  name: joi.string().min(3).max(150).required()
    .messages({
      'string.min': 'Name must be at least 3 characters long',
      'string.max': 'Name must be less than or equal to 150 characters long',
      'string.empty': 'Name cannot be empty',
      'any.required': 'Name is a required field',
    }),
  cpf: joi.string().min(11).max(14).required()
    .messages({
      'string.min': 'CPF must be at least 11 characters long',
      'string.max': 'CPF must be less than or equal to 14 characters long',
      'string.empty': 'CPF cannot be empty',
      'any.required': 'CPF is a required field',
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

export default PersonalAccountValidation;
