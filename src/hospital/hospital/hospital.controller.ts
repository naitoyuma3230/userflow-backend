import { Controller, Get } from '@nestjs/common';
import { Hospital } from '.prisma/client';
import { HospitalService } from './hospital.service';

@Controller('hospital')
export class HospitalController {
  constructor(private readonly hospitalService: HospitalService) {}
  @Get()
  async findAll(): Promise<Hospital[]> {
    return await this.hospitalService.findAll();
  }
}
