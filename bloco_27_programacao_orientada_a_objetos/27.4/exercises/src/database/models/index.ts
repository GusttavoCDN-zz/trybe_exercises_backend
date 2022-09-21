import { Sequelize } from 'sequelize';
// eslint-disable-next-line import/no-unresolved, import/extensions
import * as config from '../config/database';

const db = new Sequelize(config);

export default db;
