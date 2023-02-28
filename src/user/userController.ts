import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('user')
export class TodoController {
  constructor(private prisma: PrismaService) {}

  @Get('list')
  async getList() {
    const result = await this.prisma.user.findMany();
    return [...result];
  }
}
