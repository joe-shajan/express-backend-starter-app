import { cleanEnv, port, str } from 'envalid';

const validateEnvs = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
    DATABASE_URL: str(),
    SECRET_KEY: str(),
  });
};

export default validateEnvs;
