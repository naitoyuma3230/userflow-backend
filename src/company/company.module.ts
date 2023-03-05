import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CompanyController } from './company/company.controller';
import { CompanyService } from './company/company.service';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService, PrismaService],
})
export class CompanyModule {}
