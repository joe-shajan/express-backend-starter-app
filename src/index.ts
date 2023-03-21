import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import validateEnv from '@/utils/validateEnv';

dotenv.config();

validateEnv();

const port = process.env.PORT;

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

/**
 * after installing packages install win-node-env if you are using windows
 *
 * npm install -g win-node-env
 */
