"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialService = void 0;
const data_Source_1 = require("../db/data-Source");
const credentialUser_1 = require("../entities/credentialUser");
const passwordUtils_1 = require("../utils/passwordUtils");
class CredentialService {
    async createCredential(createCredentialsDto) {
        const { username, password, age } = createCredentialsDto;
        const credentialRepository = data_Source_1.AppDataSource.getRepository(credentialUser_1.Credentials);
        const hashedPassword = (0, passwordUtils_1.hashPassword)(password);
        const newCredential = credentialRepository.create({
            username,
            password: hashedPassword,
        });
        await credentialRepository.save(newCredential);
        return newCredential;
    }
    async login(username, password) {
        const credentialRepository = data_Source_1.AppDataSource.getRepository(credentialUser_1.Credentials);
        // Buscar las credenciales por nombre de usuario
        const credential = await credentialRepository.findOneBy({ username });
        // Verificar si se encontraron las credenciales
        if (!credential) {
            return false; // Las credenciales no existen
        }
        // Comparar la contraseña proporcionada con la contraseña almacenada
        const passwordMatch = (0, passwordUtils_1.comparePassword)(password, credential.password || '');
        return passwordMatch;
    }
    async getCredentialById(id) {
        const credentialRepository = data_Source_1.AppDataSource.getRepository(credentialUser_1.Credentials);
        const credential = await credentialRepository.findOneBy({ id });
        return credential ?? undefined; // Si credential es null, devuelve undefined
    }
    async updateCredential(id, username, password) {
        const credentialRepository = data_Source_1.AppDataSource.getRepository(credentialUser_1.Credentials);
        let credential = await credentialRepository.findOneBy({ id });
        if (!credential) {
            throw new Error("Credential not found");
        }
        credential.username = username;
        credential.password = (0, passwordUtils_1.hashPassword)(password);
        await credentialRepository.save(credential);
        return credential;
    }
    async deleteCredential(id) {
        const credentialRepository = data_Source_1.AppDataSource.getRepository(credentialUser_1.Credentials);
        const credential = await credentialRepository.findOneBy({ id });
        if (!credential) {
            throw new Error("Credential not found");
        }
        await credentialRepository.remove(credential);
    }
    async validateCredential(username, password) {
        const credentialRepository = data_Source_1.AppDataSource.getRepository(credentialUser_1.Credentials);
        const credential = await credentialRepository.findOneBy({ username });
        if (!credential) {
            return false;
        }
        return (0, passwordUtils_1.comparePassword)(password, credential.password || '');
    }
}
exports.CredentialService = CredentialService;
//# sourceMappingURL=credentialService.js.map