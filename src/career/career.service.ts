import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OpeningEntity } from './entity/openings.entity';
import { Repository, LessThan, MoreThan, Not, Equal, Brackets } from 'typeorm';

@Injectable()
export class CareerService {
  constructor(
    @InjectRepository(OpeningEntity)
    private openingRepository: Repository<OpeningEntity>,
  ) {}

  async getAllOpenings(): Promise<OpeningEntity[]> {
    return await this.openingRepository.find({
      select: ['id', 'title'],
    });
  }

  async getOneOpening(id: string): Promise<OpeningEntity[]> {
    return await this.openingRepository.find({
      select: [
        'id',
        'title',
        'type',
        'description',
        'benefits',
        'oppurtunity',
        'responsibilities',
        'qualifications',
      ],
      where: {
        id: id,
      },
    });
  }
}
