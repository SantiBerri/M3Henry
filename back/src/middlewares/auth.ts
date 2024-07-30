import { NextFunction, Request, Response } from "express";

const auth = (req: Request, res: Response, next: NextFunction) => {
    const { token, password } = req.headers;


    if (!token || !password) {
        return res.status(400).json({ message: "Error, falta autenticacion o contraseña" });
    }

    next();
};

export default auth;