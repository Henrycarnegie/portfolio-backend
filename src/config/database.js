import dotenv from "dotenv";
import mysql from "mysql2"; 
dotenv.config();

let sequelize;

export async function getSequelize() {
  if (!sequelize) {
    const { Sequelize } = await import("sequelize");
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "mysql",
        dialectModule: mysql, 
        logging: false, 
      }
    );
  }
  return sequelize;
}

