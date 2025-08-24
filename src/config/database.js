import dotenv from "dotenv";
import mysql from "mysql2";
import fs from "fs";
import path from "path"; 

dotenv.config();

let sequelize;
console.log("=== DEBUG DB_SSL_CA ===");
console.log("Raw env:", process.env.DB_SSL_CA);

export async function getSequelize() {
   if (!sequelize) {
      const { Sequelize } = await import("sequelize");

      // Resolve relative path ke absolute path
      const caPath = path.resolve(process.env.DB_SSL_CA);
      console.log("Resolved CA path:", caPath);

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
            dialectOptions: {
               ssl: {
                 ca: fs.readFileSync(caPath, "utf8")
               },
            },
         }
      );
   }
   return sequelize;
}
