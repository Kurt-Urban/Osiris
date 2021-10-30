import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const ormConfig: PostgresConnectionOptions = {
  type: 'postgres',
  port: 5432,
  password: '12345678',
  database: 'serversdb',
  username: 'postgres',
  useUTC: true,
  schema: 'public',
  synchronize: true,
  entities: ['dist/src/entities/*.entity{.ts,.js}'],
};

export default ormConfig;
