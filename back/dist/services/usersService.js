"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const data_Source_1 = require("../db/data-Source");
const entitiesUser_1 = require("../entities/entitiesUser");
const credentialUser_1 = require("../entities/credentialUser");
const passwordUtils_1 = require("../utils/passwordUtils");
class UserService {
    static async createUser(userDto) {
        const userRepository = data_Source_1.AppDataSource.getRepository(entitiesUser_1.User);
        const credentialRepository = data_Source_1.AppDataSource.getRepository(credentialUser_1.Credentials);
        // Generar el hash de la contraseña
        const hashedPassword = (0, passwordUtils_1.hashPassword)(userDto.password);
        // Crear una nueva credencial con el nombre de usuario y la contraseña hash
        const credential = credentialRepository.create({
            username: userDto.username,
            password: hashedPassword,
        });
        // Guardar la credencial en la base de datos
        await credentialRepository.save(credential);
        // Crear un nuevo usuario con el nombre, email, edad y la referencia a la credencial
        const newUser = userRepository.create({
            name: userDto.username,
            email: userDto.email,
            age: userDto.age, // Agregar la edad del usuario
            password: userDto.password, // Pasar la contraseña como parámetro
            credential: credential,
        });
        // Guardar el nuevo usuario en la base de datos
        await userRepository.save(newUser);
        return newUser;
    }
    static async findOne(userId) {
        const userRepository = data_Source_1.AppDataSource.getRepository(entitiesUser_1.User);
        return userRepository.findOneBy({ id: userId });
    }
    static async update(userId, updateUserDto) {
        const userRepository = data_Source_1.AppDataSource.getRepository(entitiesUser_1.User);
        const userToUpdate = await userRepository.findOneBy({ id: userId });
        if (!userToUpdate)
            throw new Error('User not found');
        // Update the user with updateUserDto properties
        // You need to implement the logic to update the user's properties with updateUserDto
        // For example:
        // userToUpdate.name = updateUserDto.name || userToUpdate.name;
        // ...
        await userRepository.save(userToUpdate);
        return userToUpdate;
    }
    static async remove(userId) {
        const userRepository = data_Source_1.AppDataSource.getRepository(entitiesUser_1.User);
        await userRepository.delete(userId);
    }
    static async findByUsername(username) {
        const userRepository = data_Source_1.AppDataSource.getRepository(entitiesUser_1.User);
        return userRepository.findOneBy({ name: username });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=usersService.js.map