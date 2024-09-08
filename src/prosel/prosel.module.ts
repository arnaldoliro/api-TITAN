import { Module } from '@nestjs/common';
import { ProselService } from './prosel.service';
import { ProselController } from './prosel.controller';

@Module({
  controllers: [ProselController],
  providers: [ProselService],
})
export class ProselModule {}
