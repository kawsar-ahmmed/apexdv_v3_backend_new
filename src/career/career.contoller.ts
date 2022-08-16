import {
  Controller,
  Req,
  Get,
  Query,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CareerService } from './career.service';
import { Request } from 'express';

@Controller('jobs')
export class CareerController {
  constructor(private careerService: CareerService) {}

  @Get('/all-jobs')
  @HttpCode(HttpStatus.OK)
  async getAll(): Promise<any> {
    return await this.careerService.getAllOpenings();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getOne(@Param() params): Promise<any> {
    const id = params.id as string;
    return await this.careerService.getOneOpening(id);
  }
}
