import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'test',
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    synchronize: true,
  };

export = config;