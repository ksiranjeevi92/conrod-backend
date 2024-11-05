import { Module } from '@nestjs/common';
import { UsersModule } from './domain/users/users.module';
import { CommonModule } from 'common/common.module';
import { DatabaseModule } from 'database/database.module';

@Module({
  imports: [UsersModule, CommonModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
