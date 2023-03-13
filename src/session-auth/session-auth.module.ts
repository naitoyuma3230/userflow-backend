import { Module } from '@nestjs/common';
import { SessionAuthService } from './session-auth/session-auth.service';
import { SessionAuthController } from './session-auth/session-auth.controller';

@Module({
  providers: [SessionAuthService],
  controllers: [SessionAuthController]
})
export class SessionAuthModule {}
