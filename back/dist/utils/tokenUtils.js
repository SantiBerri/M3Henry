"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRefreshToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Obtener las variables de entorno
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
// Verificar si las variables de entorno están definidas
if (!accessTokenSecret || !refreshTokenSecret) {
    throw new Error('Environment variables ACCESS_TOKEN_SECRET and REFRESH_TOKEN_SECRET must be set');
}
// Función para generar un token de acceso
const generateAccessToken = (userId) => {
    return jsonwebtoken_1.default.sign({ userId }, accessTokenSecret, { expiresIn: '15m' });
};
exports.generateAccessToken = generateAccessToken;
// Función para generar un token de actualización
const generateRefreshToken = (userId) => {
    return jsonwebtoken_1.default.sign({ userId }, refreshTokenSecret, { expiresIn: '7d' });
};
exports.generateRefreshToken = generateRefreshToken;
//# sourceMappingURL=tokenUtils.js.map