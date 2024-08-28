import { Module } from '@nestjs/common';
import { SimtechService } from './simtech.service';
import { SimtechController } from './simtech.controller';

@Module({
  controllers: [SimtechController],
  providers: [SimtechService],
})
export class SimtechModule {}
