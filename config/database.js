import { Sequelize } from "sequelize";
export default sequelize;

const sequelize = new Sequelize("zipxstore", "postgres", "TU_CONTRASEÑA", {
    host: "localhost",
    dialect: "postgres"
});

export const sequelize = new Sequelize(process.env.db_name, process.env.db_user, process.env.db_pass,
{
host: process.env.db_host,
dialect: "postgres",
dialectOptions: {
ssl: {
require: true,
rejectUnauthorized: false
}
}
})