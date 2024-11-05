import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class RegistryDates {
  @CreateDateColumn()
  crearedAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
