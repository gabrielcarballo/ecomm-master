import 'dotenv/config';

import { Dialect, Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'PSEL',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: process.env.DB_DIALECT as Dialect,
};
export = config;
