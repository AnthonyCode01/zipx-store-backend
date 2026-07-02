import { Sequelize } from "sequelize";

const sequelize = new Sequelize("zipxstore", "postgres", "TU_CONTRASEÑA", {
    host: "localhost",
    dialect: "postgres"
});

export default sequelize;