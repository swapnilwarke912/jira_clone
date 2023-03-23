import { dropDatabase } from './createConnection';

// eslint-disable-next-line @typescript-eslint/require-await
const resetDatabase = async (): Promise<void> => {
  dropDatabase();
};

export default resetDatabase;
