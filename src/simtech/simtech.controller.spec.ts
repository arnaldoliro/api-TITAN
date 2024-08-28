import { Test, TestingModule } from '@nestjs/testing';
import { SimtechController } from './simtech.controller';
import { SimtechService } from './simtech.service';

describe('SimtechController', () => {
  let controller: SimtechController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SimtechController],
      providers: [SimtechService],
    }).compile();

    controller = module.get<SimtechController>(SimtechController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
