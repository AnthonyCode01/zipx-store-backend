import express from "express";

import {
    obtenerCursos,
    obtenerCurso,
    crearCurso,
    actualizarCurso,
    eliminarCurso
} from "../controllers/CursoController.js";

const router = express.Router();

router.get("/", obtenerCursos);

router.get("/:id", obtenerCurso);

router.post("/", crearCurso);

router.put("/:id", actualizarCurso);

router.delete("/:id", eliminarCurso);

export default router;