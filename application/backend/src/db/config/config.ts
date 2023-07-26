import { Options } from 'sequelize';

const config: Options = {
  dialect: 'mysql',
  database: 'PSEL',
  host: process.env.DB_HOST || 'localhost',
  password: process.env.DB_PASSWORD || 'password',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || 'root',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

export default config;
