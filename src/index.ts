import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

import connection from './db/connection';
import apiV1 from './routes/v1';

const PORT = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
