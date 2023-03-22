import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import validateEnvs from '@/utils/validateEnvs';

import router from '@/routers/routes';
import usersRouter from '@/routers/users.routes';

dotenv.config();

validateEnvs();

const port = process.env.PORT;

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/', router);
app.use('/', usersRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

/**
 * after installing packages install win-node-env if you are using windows
 *
 * npm install -g win-node-env
 */
