import { Connection } from 'typeorm';
import { Line } from './../models/line.entity';

export const lineProviders = [
  {
    provide: 'LINE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Line),
    inject: ['DATABASE_CONNECTION'],
  },
];