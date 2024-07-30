"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use('/api', routes_1.default); // Prefijo '/api' para todas las rutas
// Middleware para parsear el cuerpo de las solicitudes en formato JSON
server.use(body_parser_1.default.json());
// Ruta para manejar las solicitudes POST en '/'
server.post('/', (req, res) => {
    // Maneja la lógica para procesar los datos recibidos en la solicitud POST
    console.log('Datos recibidos:', req.body);
    // Envía una respuesta de éxito
    res.status(200).send('Solicitud POST recibida correctamente');
});
// Manejo de rutas no encontradas
server.use((req, res) => {
    res.status(404).send({ message: 'Route not found' });
});
// Manejo de errores
server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'An error occurred' });
});
exports.default = server;
//# sourceMappingURL=server.js.map