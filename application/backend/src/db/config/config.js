'use strict';

Object.defineProperty(exports, '__esModule', { value: true });
const config = {
  dialect: 'mysql',
  database: 'PSEL',
  host: process.env.DB_HOST || 'localhost',
  password: process.env.DB_PASSWORD || 'databasepassword',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || 'root',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};
module.exports = config;
// # sourceMappingURL=config.js.map
