import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

export enum JobType {
  REMOTE = 'remote',
  ONSITE = 'on-site',
  HYBRID = 'hybrid',
}

@Entity({ name: 'openings' })
export class OpeningEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  title: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'enum', enum: JobType })
  type: JobType;

  @Column({ type: 'varchar', length: 300 })
  benefits: string;

  @Column({ type: 'varchar', length: 300 })
  oppurtunity: string;

  @Column({ type: 'varchar', length: 300 })
  responsibilities: string;

  @Column({ type: 'varchar', length: 300 })
  qualifications: string;
}
