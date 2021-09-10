import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const ormConfig: PostgresConnectionOptions = {
  type: 'postgres',
  port: 5432,
  password: '12345678',
  database: 'gallerydb',
  username: 'postgres',
  useUTC: false,
  schema: 'public',
  synchronize: true,
  entities: ['dist/src/dto/entities/**/*.entity{.ts,.js}'],
};

export default ormConfig;