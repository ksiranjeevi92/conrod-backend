import { RegistryDates } from 'common/embedded/registry-dates.embedded';
import { Ordertatus } from 'orders/enums/order-status.enum';
import { Payment } from 'payments/entities/payment.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from 'users/entities/user.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: Ordertatus,
    default: Ordertatus.AWAITING_PAYMENT,
  })
  status: Ordertatus;

  @Column(() => RegistryDates, { prefix: false })
  registeryDates: RegistrationOptions;

  @ManyToOne(() => User, (customer) => customer.orders, { nullable: false })
  customer: User;
  @OneToOne(() => Payment, (payment) => payment.order, { cascade: true })
  payment: Payment;
}
