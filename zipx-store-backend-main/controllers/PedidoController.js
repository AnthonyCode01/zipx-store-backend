import Pedido from "../models/Pedido.js";

// Obtener todos los pedidos
export const obtenerPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.findAll();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Obtener un pedido por ID
export const obtenerPedido = async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id);

        if (!pedido) {
            return res.status(404).json({
                mensaje: "Pedido no encontrado"
            });
        }

        res.json(pedido);

    } catch (error) {
        res.status(500).json({
            mensaje: error.message
        });
    }
};

// Crear pedido
export const crearPedido = async (req, res) => {
    try {
        const pedido = await Pedido.create(req.body);

        res.status(201).json(pedido);

    } catch (error) {
        res.status(500).json({
            mensaje: error.message
        });
    }
};

// Actualizar pedido
export const actualizarPedido = async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id);

        if (!pedido) {
            return res.status(404).json({
                mensaje: "Pedido no encontrado"
            });
        }

        await pedido.update(req.body);

        res.json(pedido);

    } catch (error) {
        res.status(500).json({
            mensaje: error.message
        });
    }
};

// Eliminar pedido
export const eliminarPedido = async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id);

        if (!pedido) {
            return res.status(404).json({
                mensaje: "Pedido no encontrado"
            });
        }

        await pedido.destroy();

        res.json({
            mensaje: "Pedido eliminado correctamente"
        });

    } catch (error) {
        res.status(500).json({
            mensaje: error.message
        });
    }
};