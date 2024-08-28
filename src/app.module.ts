import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SimtechModule } from './simtech/simtech.module';
import { SiteTitanModule } from './site-titan/site-titan.module';

@Module({
  imports: [SimtechModule, SiteTitanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
