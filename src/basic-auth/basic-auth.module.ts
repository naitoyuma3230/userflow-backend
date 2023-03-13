import { Module } from '@nestjs/common';
import { BasicAuthController } from './basic-auth/basic-auth.controller';
import { BasicAuthService } from './basic-auth/basic-auth.service';

// BasicStrategyの実装
import { BasicStrategy } from '../basic.strategy';

@Module({
  controllers: [BasicAuthController],
  providers: [BasicAuthService, BasicStrategy],
})
export class BasicAuthModule {}
