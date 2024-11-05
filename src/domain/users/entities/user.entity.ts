import { RegistryDates } from 'common/embedded/registry-dates.embedded';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column({ unique: true })
  phone: string;
  @Column(() => RegistryDates, { prefix: false })
  registryDates: RegistryDates;
}
