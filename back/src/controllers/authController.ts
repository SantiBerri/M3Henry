import { Request, Response } from 'express';
import { UserService } from '../services/usersService'; 
import { generateAccessToken } from '../utils/tokenUtils';
import { comparePassword } from '../utils/passwordUtils';

export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { username, password } = req.body;

    const user = await UserService.findByUsername(username);
    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

 
    const passwordMatch = await comparePassword(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    const accessToken = generateAccessToken(user.id);


    return res.status(200).json({ accessToken });
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    return res.status(500).json({ message: 'Error en el inicio de sesión' });
  }
};


