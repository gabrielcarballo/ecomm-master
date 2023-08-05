import { Sequelize } from 'sequelize';
import config from '../config/config';

console.log('config no index', config);

const sequelize = new Sequelize(config);

export default sequelize;
