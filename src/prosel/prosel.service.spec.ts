import { Test, TestingModule } from '@nestjs/testing';
import { ProselService } from './prosel.service';

describe('ProselService', () => {
  let service: ProselService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProselService],
    }).compile();

    service = module.get<ProselService>(ProselService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
