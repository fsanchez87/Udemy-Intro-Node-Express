import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import 'dotenv/config';

import connection from './db/connection';
import apiV1 from './routes/v1';

const PORT: string = process.env.PORT!;
const app = express();
app.use(
  cors({
    origin: ['https://localhost:3000', 'http://127.0.0.1:8090'],
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './views/index.html'))
);

apiV1(app);

app.use((req: Request, res: Response) => {
  res.status(404).send('NOT FOUND!');
});

connection().then((connected: boolean) => {
  if (connected) {
    app.listen(PORT, () => {
      console.log('Running on ' + PORT);
    });
  } else {
    console.log('Error de conexión MongoDB');
  }
});
