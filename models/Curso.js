import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Categoria from "./Categoria.js";

const Curso = sequelize.define("Curso", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    precio: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    nivel: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    alumnos: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    rating: {
        type: DataTypes.DECIMAL(2,1),
        allowNull: false
    },
    color: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    imagen: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

Categoria.hasMany(Curso);
Curso.belongsTo(Categoria);

export default Curso;