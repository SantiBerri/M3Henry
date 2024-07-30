"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors")); // Importa el middleware cors
const data_Source_1 = require("../src/db/data-Source");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const reservesRoutes_1 = __importDefault(require("../src/routes/reservesRoutes"));
const authController_1 = require("../src/controllers/authController");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
// Configuración de CORS
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173' // Reemplaza esto con el origen de tu aplicación
}));
// Inicializar la conexión a la base de datos y luego el servidor
data_Source_1.AppDataSource.initialize().then(() => {
    console.log('Connected to the database');
    // Rutas
    app.use('/users', userRoutes_1.default); // Usa app en lugar de router
    app.use('/reserves', reservesRoutes_1.default); // Usa app en lugar de router
    app.post('/login', authController_1.login);
    // Iniciar el servidor
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch(error => console.log('Error during Data Source initialization:', error));
//# sourceMappingURL=index.js.map