import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from 'typeorm';
import { Order } from './order.entity';
import { Product } from 'product/entities/product.entity';

@Entity()
export class OrderItem {
  @PrimaryColumn()
  orderId: number;

  @PrimaryColumn()
  productId: number;

  @ManyToOne(() => Order, (order) => order.items, { onDelete: 'CASCADE' })
  order: Order;

  @ManyToMany(() => Order, (product) => product.items)
  product: Product;

  @Column()
  quantity: number;

  @Column({ type: 'decimal', precision: 6, scale: 2 })
  price: number;
}
