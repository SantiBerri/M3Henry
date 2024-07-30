"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPassword = exports.isValidEmail = void 0;
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
exports.isValidEmail = isValidEmail;
const isValidPassword = (password) => {
    // Implementa tus propias reglas de validación de contraseña
    return password.length >= 8;
};
exports.isValidPassword = isValidPassword;
//# sourceMappingURL=validationUtils.js.map