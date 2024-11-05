import { RegistryDates } from 'common/embedded/registry-dates.embedded';
import { Ordertatus } from 'orders/enums/order-status.enum';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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
}
