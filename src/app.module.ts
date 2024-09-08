import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SimtechModule } from './simtech/simtech.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProselModule } from './prosel/prosel.module';

@Module({
  imports: [SimtechModule, PrismaModule, ProselModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
