import { Test, TestingModule } from '@nestjs/testing';
import { SiteTitanService } from './site-titan.service';

describe('SiteTitanService', () => {
  let service: SiteTitanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SiteTitanService],
    }).compile();

    service = module.get<SiteTitanService>(SiteTitanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
