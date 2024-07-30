"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const usersService_1 = require("../services/usersService");
class UserController {
    createUser = async (req, res) => {
        try {
            const createUserDto = req.body;
            const newUser = await usersService_1.UserService.createUser(createUserDto);
            return res.status(201).json(newUser);
        }
        catch (error) { // Asegúrate de que el tipo es 'unknown'
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            else {
                return res.status(500).json({ message: 'An unexpected error occurred' });
            }
        }
    };
    getUserById = async (req, res) => {
        try {
            const userId = parseInt(req.params.id);
            const user = await usersService_1.UserService.findOne(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.status(200).json(user);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(404).json({ message: error.message });
            }
            else {
                return res.status(500).json({ message: 'An unexpected error occurred' });
            }
        }
    };
    updateUser = async (req, res) => {
        try {
            const userId = parseInt(req.params.id);
            const updateUserDto = req.body;
            const updatedUser = await usersService_1.UserService.update(userId, updateUserDto);
            return res.status(200).json(updatedUser);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            else {
                return res.status(500).json({ message: 'An unexpected error occurred' });
            }
        }
    };
    deleteUser = async (req, res) => {
        try {
            const userId = parseInt(req.params.id);
            await usersService_1.UserService.remove(userId);
            return res.status(204).send();
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            else {
                return res.status(500).json({ message: 'An unexpected error occurred' });
            }
        }
    };
}
exports.UserController = UserController;
//# sourceMappingURL=usersControllers.js.map