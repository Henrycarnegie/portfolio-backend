import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Project = db.define(
   "projects",
   {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
      },
      projectName: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      category: DataTypes.STRING,
      description: DataTypes.TEXT,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
   },
   {
      freezeTableName: true,
      timestamps: true,
   }
);

export default Project;

(async () => {
   await db.sync();
})();
