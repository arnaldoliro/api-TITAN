import { Test, TestingModule } from '@nestjs/testing';
import { SimtechService } from './simtech.service';

describe('SimtechService', () => {
  let service: SimtechService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SimtechService],
    }).compile();

    service = module.get<SimtechService>(SimtechService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
