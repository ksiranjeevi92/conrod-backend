import { Module } from '@nestjs/common';
import { UsersModule } from './domain/users/users.module';
import { CommonModule } from 'common/common.module';
import { DatabaseModule } from 'database/database.module';
import { EnvModule } from 'env/env.module';
import { OrdersModule } from 'orders/orders.module';
import { CategoriesModule } from 'categories/categories.module';
import { PaymentsModule } from 'payments/payments.module';
import { ProductModule } from 'product/product.module';

@Module({
  imports: [
    EnvModule,
    UsersModule,
    OrdersModule,
    CategoriesModule,
    PaymentsModule,
    ProductModule,
    CommonModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
