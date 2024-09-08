import { Test, TestingModule } from '@nestjs/testing';
import { ProselController } from './prosel.controller';
import { ProselService } from './prosel.service';

describe('ProselController', () => {
  let controller: ProselController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProselController],
      providers: [ProselService],
    }).compile();

    controller = module.get<ProselController>(ProselController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
