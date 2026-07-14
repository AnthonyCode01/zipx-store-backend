import DetallePedido from "../models/DetallePedido.js";

// Obtener todos los detalles
export const obtenerDetalles = async (req, res) => {
    try {
        const detalles = await DetallePedido.findAll();
        res.json(detalles);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Obtener un detalle por ID
export const obtenerDetalle = async (req, res) => {
    try {
        const detalle = await DetallePedido.findByPk(req.params.id);

        if (!detalle) {
            return res.status(404).json({
                mensaje: "Detalle no encontrado"
            });
        }

        res.json(detalle);

    } catch (error) {
        res.status(500).json({
            mensaje: error.message
        });
    }
};

// Crear detalle
export const crearDetalle = async (req, res) => {
    try {
        const detalle = await DetallePedido.create(req.body);

        res.status(201).json(detalle);

    } catch (error) {
        res.status(500).json({
            mensaje: error.message
        });
    }
};

// Actualizar detalle
export const actualizarDetalle = async (req, res) => {
    try {
        const detalle = await DetallePedido.findByPk(req.params.id);

        if (!detalle) {
            return res.status(404).json({
                mensaje: "Detalle no encontrado"
            });
        }

        await detalle.update(req.body);

        res.json(detalle);

    } catch (error) {
        res.status(500).json({
            mensaje: error.message
        });
    }
};

// Eliminar detalle
export const eliminarDetalle = async (req, res) => {
    try {
        const detalle = await DetallePedido.findByPk(req.params.id);

        if (!detalle) {
            return res.status(404).json({
                mensaje: "Detalle no encontrado"
            });
        }

        await detalle.destroy();

        res.json({
            mensaje: "Detalle eliminado correctamente"
        });

    } catch (error) {
        res.status(500).json({
            mensaje: error.message
        });
    }
};