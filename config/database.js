import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME || 'postgres',
  process.env.DB_USER || 'esteban',
  process.env.DB_PASS || '@PrograWEB', 
  {
    host: process.env.DB_HOST || 'zipx-storedb.postgres.database.azure.com',
    port: process.env.DB_PORT || 8080,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false 
      }
    }
  }
);

export default sequelize;