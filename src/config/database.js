import dotenv from "dotenv";
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
        dialect: "mysql",
        port: process.env.DB_PORT,
      }
    );
  }
  return sequelize;
}
