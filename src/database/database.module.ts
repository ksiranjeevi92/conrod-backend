import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'admin',
      password: 'pass123',
      host: 'localhost',
      database: 'postgres',
      port: 5432,
      autoLoadEntities: true,
    }),
  ],
})
export class DatabaseModule {}
