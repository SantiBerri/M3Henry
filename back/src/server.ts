import express from 'express';
import router from './routes/routes';
import bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';

const server = express();

server.use(express.json());
server.use('/api', router); 

server.use(bodyParser.json());


server.post('/', (req, res) => {

  console.log('Datos recibidos:', req.body);


  res.status(200).send('Solicitud POST recibida correctamente');
});


server.use((req, res) => {
  res.status(404).send({ message: 'Route not found' });
});


server.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send({ message: 'An error occurred' });
});

export default server;
