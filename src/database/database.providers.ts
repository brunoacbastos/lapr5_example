import { createConnection } from 'typeorm';
import * as config from '../ormconfig';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection(config),
  }
];