import { config } from 'dotenv';

import { Dialect, Options } from 'sequelize';

config();

const configuration: Options = {
  dialect: process.env.DB_DIALECT as Dialect,
  database: 'PSEL',
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  logging: false,

};
console.log('config do TS', configuration);
export default configuration;
