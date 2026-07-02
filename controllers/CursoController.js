import Curso from "../models/Curso.js";

// Obtener todos los cursos
export const obtenerCursos = async (req, res) => {
    try {
        const cursos = await Curso.findAll();
        res.json(cursos);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Obtener un curso por ID
export const obtenerCurso = async (req, res) => {
    try {
        const curso = await Curso.findByPk(req.params.id);

        if (!curso) {
            return res.status(404).json({ mensaje: "Curso no encontrado" });
        }

        res.json(curso);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Crear un curso
export const crearCurso = async (req, res) => {
    try {
        const curso = await Curso.create(req.body);
        res.status(201).json(curso);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Actualizar un curso
export const actualizarCurso = async (req, res) => {
    try {
        const curso = await Curso.findByPk(req.params.id);

        if (!curso) {
            return res.status(404).json({ mensaje: "Curso no encontrado" });
        }

        await curso.update(req.body);
        res.json(curso);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Eliminar un curso
export const eliminarCurso = async (req, res) => {
    try {
        const curso = await Curso.findByPk(req.params.id);

        if (!curso) {
            return res.status(404).json({ mensaje: "Curso no encontrado" });
        }

        await curso.destroy();
        res.json({ mensaje: "Curso eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};