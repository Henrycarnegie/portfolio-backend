import { getSequelize } from "../config/database.js";

export async function ProjectModel() {
   const sequelize = await getSequelize();
   const { DataTypes } = await import("sequelize");

   const Project = sequelize.define(
      "projects",
      {
         id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
         projectName: { type: DataTypes.STRING, allowNull: false },
         category: DataTypes.STRING,
         description: DataTypes.TEXT,
         startDate: DataTypes.DATE,
         endDate: DataTypes.DATE,
      },
      { freezeTableName: true, timestamps: true }
   );

   // Jangan sync di production
   if (process.env.NODE_ENV !== "production") {
      await sequelize.sync();
   }

   return Project;
}
