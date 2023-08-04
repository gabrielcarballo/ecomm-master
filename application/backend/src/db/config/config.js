const { config } = require('dotenv');

config();

module.exports = {
  dialect: process.env.DB_DIALECT || 'mysql',
  database: 'PSEL',
  host: process.env.DB_HOST || 'localhost',
  password: process.env.DB_PASSWORD || 'databasepassword',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || 'root',
  logging: false,
};
