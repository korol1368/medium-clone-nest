import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'fullWithNest',
  password: '123',
  database: 'fullWithNest',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  migrationsTableName: 'custom_migration_table',
  logging: true,
};

export default config;

export const AppDataSource = new DataSource(config);
AppDataSource.initialize();
