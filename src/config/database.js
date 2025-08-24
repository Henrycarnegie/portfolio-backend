import dotenv from 'dotenv';
import mysql from 'mysql2';
import { Sequelize } from 'sequelize';

dotenv.config();

let sequelize;

export async function getSequelize() {
  if (!sequelize) {
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        dialectModule: mysql,
        logging: false,
        dialectOptions: {
          ssl: {
            ca: process.env.DB_SSL_CA
          }
        }
      }
    );
  }
  return sequelize;
}
