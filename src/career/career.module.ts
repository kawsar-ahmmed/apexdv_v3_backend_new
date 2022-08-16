import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OpeningEntity } from './entity/openings.entity';
import { CareerController } from './career.contoller';
import { CareerService } from './career.service';
@Module({
  imports: [TypeOrmModule.forFeature([OpeningEntity])],
  providers: [CareerService],
  controllers: [CareerController],
})
export class CareerModule {}
