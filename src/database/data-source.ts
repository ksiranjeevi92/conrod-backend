import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  username: 'admin',
  password: 'pass123',
  host: 'localhost',
  database: 'postgres',
  port: 5432,
  entities: ['dist/domain/**/*.entity.js'],
  migrations: ['dist/database/migrations/*.js'],
});
