import JWT, { SignOptions, JwtPayload } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

const options: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '10d',
};

export const createToken = (payload: JwtPayload) => JWT.sign(payload, secret, options);

export const verifyToken = (token: string) => JWT.verify(token, secret);
