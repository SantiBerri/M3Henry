"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const data_Source_1 = require("../db/data-Source");
const credentialUser_1 = require("../entities/credentialUser");
const passwordUtils_1 = require("../utils/passwordUtils");
class AuthService {
    static async login(username, password) {
        const credentialRepository = data_Source_1.AppDataSource.getRepository(credentialUser_1.Credentials);
        const credential = await credentialRepository.findOneBy({ username });
        if (!credential) {
            // El nombre de usuario no existe en la base de datos
            return false;
        }
        // Comparar la contraseña proporcionada con la contraseña almacenada en la base de datos
        return (0, passwordUtils_1.comparePassword)(password, credential.password);
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=authService.js.map