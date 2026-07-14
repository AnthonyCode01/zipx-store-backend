import express from "express";

import {
    obtenerDetalles,
    obtenerDetalle,
    crearDetalle,
    actualizarDetalle,
    eliminarDetalle
} from "../controllers/DetallePedidoController.js";

const router = express.Router();

router.get("/", obtenerDetalles);

router.get("/:id", obtenerDetalle);

router.post("/", crearDetalle);

router.put("/:id", actualizarDetalle);

router.delete("/:id", eliminarDetalle);

export default router;