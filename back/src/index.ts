import express from 'express';
import cors from 'cors'; 
import { AppDataSource } from '../src/db/data-Source';
import userRouter from './routes/userRoutes';
import reservationRouter from '../src/routes/reservesRoutes';
import { login } from '../src/controllers/authController';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.use(cors({
  origin: 'http://localhost:5173' 
}));


AppDataSource.initialize().then(() => {
  console.log('Connected to the database');

  app.use('/users', userRouter); 
  app.use('/reserves', reservationRouter); 
  app.post('/login', login);


  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch(error => console.log('Error during Data Source initialization:', error));