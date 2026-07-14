import express from "express";

import {
    obtenerCategorias,
    crearCategoria,
    obtenerCategoria,
    actualizarCategoria,
    eliminarCategoria
} from "../controllers/CategoriaController.js";

const router = express.Router();

router.get("/", obtenerCategorias);

router.post("/", crearCategoria);

router.get("/:id", obtenerCategoria);

router.put("/:id", actualizarCategoria);

router.delete("/:id", eliminarCategoria);

export default router;