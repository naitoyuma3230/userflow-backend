import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('user')
export class TodoController {
  constructor(private prisma: PrismaService) {}

  @Get('list')
  async getList() {
    const result = await this.prisma.user.findMany();
    return [...result];
  }
}
