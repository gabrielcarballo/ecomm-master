import { config } from 'dotenv';
import { App } from './app';

config();
const PORT = process.env.APP_PORT || 3001;

new App().start(PORT);
