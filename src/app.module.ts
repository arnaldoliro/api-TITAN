import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SimtechModule } from './simtech/simtech.module';
import { SiteTitanModule } from './site-titan/site-titan.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [SimtechModule, SiteTitanModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
