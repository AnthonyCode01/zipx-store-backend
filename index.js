import express from "express";
import cors from "cors";
import sequelize from "./config/database.js";

// Modelos
import Categoria from "./models/Categoria.js";
import Curso from "./models/Curso.js";
import Usuario from "./models/Usuario.js";
import Pedido from "./models/Pedido.js";
import DetallePedido from "./models/DetallePedido.js";

// Rutas
import categoriaRoutes from "./routes/CategoriaRoutes.js";
import cursoRoutes from "./routes/CursoRoutes.js";
import usuarioRoutes from "./routes/UsuarioRoutes.js";
import pedidoRoutes from "./routes/PedidoRoutes.js";
import detallePedidoRoutes from "./routes/DetallePedidoRoutes.js";

const app = express();
const PORT = 3001;

// ===============================
// MIDDLEWARES
// ===============================

// Permitir peticiones desde el frontend React
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// Permitir recibir JSON
app.use(express.json());

// ===============================
// RUTAS
// ===============================

app.use("/categorias", categoriaRoutes);
app.use("/cursos", cursoRoutes);
app.use("/usuarios", usuarioRoutes);
app.use("/pedidos", pedidoRoutes);
app.use("/detallepedidos", detallePedidoRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente");
});

// ===============================
// BASE DE DATOS
// ===============================

sequelize.sync()
    .then(() => {
        console.log(" Base de datos sincronizada correctamente");

        app.listen(PORT, () => {
            console.log(` Servidor ejecutándose en http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error(" Error al sincronizar la base de datos:", error);
    });