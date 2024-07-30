import { Request, Response } from 'express';
import { UserService } from '../services/usersService';
import { CreateUserDto } from '../dto/createUserDto';
import { UpdateUserDto } from '../dto/updateUserDto';

export class UserController {

  public createUser = async (req: Request, res: Response): Promise<Response> => {
    try {
      const createUserDto: CreateUserDto = req.body;
      const newUser = await UserService.createUser(createUserDto);
      return res.status(201).json(newUser);
    } catch (error: unknown) { 
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      } else {
        return res.status(500).json({ message: 'An unexpected error occurred' });
      }
    }
  };

  public getUserById = async (req: Request, res: Response): Promise<Response> => {
    try {
      const userId = parseInt(req.params.id);
      const user = await UserService.findOne(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.status(200).json(user);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(404).json({ message: error.message });
      } else {
        return res.status(500).json({ message: 'An unexpected error occurred' });
      }
    }
  };

  public updateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
      const userId = parseInt(req.params.id);
      const updateUserDto: UpdateUserDto = req.body;
      const updatedUser = await UserService.update(userId, updateUserDto);
      return res.status(200).json(updatedUser);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      } else {
        return res.status(500).json({ message: 'An unexpected error occurred' });
      }
    }
  };

  public deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try {
      const userId = parseInt(req.params.id);
      await UserService.remove(userId);
      return res.status(204).send();
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      } else {
        return res.status(500).json({ message: 'An unexpected error occurred' });
      }
    }
  };
}