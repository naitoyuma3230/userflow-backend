import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';
import { FacilityModule } from './facility/facility.module';
import { HospitalModule } from './hospital/hospital.module';
import { CarehomeModule } from './carehome/carehome.module';
import { OpenaiModule } from './openai/openai.module';
import { BasicAuthModule } from './basic-auth/basic-auth.module';
import { SessionAuthModule } from './session-auth/session-auth.module';

@Module({
  imports: [
    UserModule,
    CompanyModule,
    FacilityModule,
    HospitalModule,
    CarehomeModule,
    OpenaiModule,
    BasicAuthModule,
    SessionAuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
