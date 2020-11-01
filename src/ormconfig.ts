import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'test',
    entities: [
        __dirname + '/**/*.entity{.ts,.js}',
    ],
    logging: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

export = config;