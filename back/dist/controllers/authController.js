"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const usersService_1 = require("../services/usersService"); // Corregir el nombre del servicio de usuario
const tokenUtils_1 = require("../utils/tokenUtils");
const passwordUtils_1 = require("../utils/passwordUtils");
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        // Verifica si el usuario existe en la base de datos
        const user = await usersService_1.UserService.findByUsername(username);
        if (!user) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }
        // Compara la contraseña ingresada con la contraseña almacenada
        const passwordMatch = await (0, passwordUtils_1.comparePassword)(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }
        // Genera un token de acceso JWT
        const accessToken = (0, tokenUtils_1.generateAccessToken)(user.id);
        // Retorna el token de acceso en la respuesta
        return res.status(200).json({ accessToken });
    }
    catch (error) {
        console.error('Error en el inicio de sesión:', error);
        return res.status(500).json({ message: 'Error en el inicio de sesión' });
    }
};
exports.login = login;
// Aquí puedes agregar otras funciones relacionadas con la autenticación si es necesario
//# sourceMappingURL=authController.js.map