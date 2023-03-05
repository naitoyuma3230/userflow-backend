import { Injectable } from '@nestjs/common';
import { Hospital, PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class HospitalService {
  async findAll(): Promise<Hospital[]> {
    return await prisma.hospital.findMany({});
  }
}
