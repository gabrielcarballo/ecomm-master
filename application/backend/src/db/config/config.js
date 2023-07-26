'use strict';

Object.defineProperty(exports, '__esModule', { value: true });
const config = {
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
exports.default = config;
// # sourceMappingURL=config.js.map
