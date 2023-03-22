import { cleanEnv, port, str } from 'envalid';

const validateEnvs = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
    DATABASE_URL: str(),
  });
};

export default validateEnvs;
