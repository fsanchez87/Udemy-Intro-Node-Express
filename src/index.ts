import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

import apiV1 from './routes/v1';

const PORT = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

apiV1(app);

app.use((req: Request, res: Response) => {
  res.status(404).send('NOT FOUND!');
});

app.listen(PORT, () => {
  console.log('Running on ' + PORT);
});
