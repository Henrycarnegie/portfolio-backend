import { Sequelize } from "sequelize";

const db = new Sequelize('express_portfolio', "root", "", {
    host: process.env.DB_HOST,
    dialect: "mysql"
})

export default db;