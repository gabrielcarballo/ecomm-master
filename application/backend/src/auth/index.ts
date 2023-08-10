import JWT, { SignOptions } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

const options: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '10d',
};

export type payloadType = {
  email: string;
  password: string;
};

export type DecodedPayloadType = {
  header: {
    alg: string;
    typ: string;
  };
  payload: {
    email: string;
    password: string;
    iat: number;
    exp: number;
  };
  signature: string;
};

export const createToken = (
  { email, password }: payloadType,
) => JWT.sign({ email, password }, secret, options);

export const decodeToken = (token: string) => JWT.decode(token, { complete: true, json: true });

export const verifyToken = (token: string) => JWT.verify(token, secret);
