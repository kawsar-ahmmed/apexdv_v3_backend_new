import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { OpeningEntity } from './openings.entity';

@Entity()
export class ApplicantEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 300 })
  full_name: string;

  @Column({ type: 'varchar', length: 300 })
  cv: string;

  @Column({ type: 'int' })
  expected_salary: number;

  @Column({ type: 'varchar', length: 300 })
  cover_letter: string;

  @OneToOne(() => OpeningEntity)
  @JoinColumn()
  job_id: OpeningEntity;
}
