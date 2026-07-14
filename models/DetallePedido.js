import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Pedido from "./Pedido.js";
import Curso from "./Curso.js";

const DetallePedido = sequelize.define("DetallePedido", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    subtotal: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
});

Pedido.hasMany(DetallePedido);
DetallePedido.belongsTo(Pedido);

Curso.hasMany(DetallePedido);
DetallePedido.belongsTo(Curso);

export default DetallePedido;