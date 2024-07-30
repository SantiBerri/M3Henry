"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeInput = void 0;
const sanitizeInput = (input) => {
    // Implementa la sanitización de la entrada para evitar inyecciones SQL, XSS, etc.
    // Esta es una implementación muy básica y deberías considerar una librería especializada
    return input.replace(/<script.*?>.*?<\/script>/gi, '')
        .replace(/<[\/\!]*?[^<>]*?>/gi, '')
        .replace(/<style.*?>.*?<\/style>/gi, '')
        .replace(/<![\s\S]*?--[ \t\n\r]*>/gi, '');
};
exports.sanitizeInput = sanitizeInput;
// Otros métodos relacionados con la seguridad...
//# sourceMappingURL=securityUtils.js.map