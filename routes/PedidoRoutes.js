import express from "express";

import {
    obtenerPedidos,
    obtenerPedido,
    crearPedido,
    actualizarPedido,
    eliminarPedido
} from "../controllers/PedidoController.js";

const router = express.Router();

router.get("/", obtenerPedidos);

router.get("/:id", obtenerPedido);

router.post("/", crearPedido);

router.put("/:id", actualizarPedido);

router.delete("/:id", eliminarPedido);

export default router;