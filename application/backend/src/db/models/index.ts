import { Sequelize } from 'sequelize';
import * as config from '../config/config';

const sequelize = new Sequelize(config.default);

export default sequelize;
