import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

import validateEnvs from '@/utils/validateEnvs';

import router from '@/routers/routes';
import usersRouter from '@/routers/users.routes';
import authRouter from '@/routers/auth.routes';
import errorMiddleware from '@middlewares/error.middleware';

dotenv.config();

validateEnvs();

const port = process.env.PORT;

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/', router);
app.use('/', usersRouter);
app.use('/', authRouter);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

/**
 * after installing packages install win-node-env if you are using windows
 *
 * npm install -g win-node-env
 */
