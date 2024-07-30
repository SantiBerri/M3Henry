import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;


if (!accessTokenSecret || !refreshTokenSecret) {
  throw new Error('Environment variables ACCESS_TOKEN_SECRET and REFRESH_TOKEN_SECRET must be set');
}

export const generateAccessToken = (userId: number): string => {
  return jwt.sign({ userId }, accessTokenSecret, { expiresIn: '15m' });
};

export const generateRefreshToken = (userId: number): string => {
  return jwt.sign({ userId }, refreshTokenSecret, { expiresIn: '7d' });
};
