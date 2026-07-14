import Categoria from "../models/Categoria.js";

// Obtener todas las categorías
export const obtenerCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Crear una categoría
export const crearCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.create(req.body);
        res.status(201).json(categoria);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Obtener una categoría por ID
export const obtenerCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);

        if (!categoria) {
            return res.status(404).json({ mensaje: "Categoría no encontrada" });
        }

        res.json(categoria);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Actualizar una categoría
export const actualizarCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);

        if (!categoria) {
            return res.status(404).json({ mensaje: "Categoría no encontrada" });
        }

        await categoria.update(req.body);

        res.json(categoria);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Eliminar una categoría
export const eliminarCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);

        if (!categoria) {
            return res.status(404).json({ mensaje: "Categoría no encontrada" });
        }

        await categoria.destroy();

        res.json({ mensaje: "Categoría eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};