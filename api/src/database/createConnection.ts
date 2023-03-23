import { DataSource } from 'typeorm';
import * as entities from 'entities';

const createDatabaseConnection = async (): Promise<DataSource> => {
  const DBConnected = await createConnection();
  await DBConnected.initialize();
  return DBConnected;
};

// eslint-disable-next-line @typescript-eslint/require-await
const createConnection = async (): Promise<DataSource> => {
  const dataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: Object.values(entities),
    synchronize: true,
  });
  return dataSource;
};
export default createDatabaseConnection;

export const dropDatabase = async (): Promise<void> => {
  const DBConnected = await createConnection();
  await DBConnected.initialize();
  await DBConnected.dropDatabase();
};

// export const synchronizeDatabase = async (): Promise<void> => {
//   const DBConnected = await createConnection();
//   await DBConnected.initialize();
//   await DBConnected.synchronize();
// };
