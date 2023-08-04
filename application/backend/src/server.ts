import { config } from 'dotenv';
import { App } from './app';

config();
const PORT = process.env.APP_PORT || 3001;
console.log('PORT', process.env.APP_PORT);
new App().start(PORT);
