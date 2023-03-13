import { Controller, Post, UseGuards } from '@nestjs/common';
import { BasicAuthGuard } from '../../basic-auth.gurd';

@Controller('basic-auth')
export class BasicAuthController {
  @Post('/test')
  @UseGuards(BasicAuthGuard)
  restrictedRoute() {
    return true;
  }
}
