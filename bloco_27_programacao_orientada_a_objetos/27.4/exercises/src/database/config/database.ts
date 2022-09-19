import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'root',
  database: process.env.DB_NAME,
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
  port: Number(process.env.DB_PORT) || 3306,
};

export = config;
