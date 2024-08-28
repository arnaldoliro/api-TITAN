import { Module } from '@nestjs/common';
import { SiteTitanService } from './site-titan.service';
import { SiteTitanController } from './site-titan.controller';

@Module({
  controllers: [SiteTitanController],
  providers: [SiteTitanService],
})
export class SiteTitanModule {}
