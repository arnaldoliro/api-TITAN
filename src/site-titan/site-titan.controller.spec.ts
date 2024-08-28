import { Test, TestingModule } from '@nestjs/testing';
import { SiteTitanController } from './site-titan.controller';
import { SiteTitanService } from './site-titan.service';

describe('SiteTitanController', () => {
  let controller: SiteTitanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SiteTitanController],
      providers: [SiteTitanService],
    }).compile();

    controller = module.get<SiteTitanController>(SiteTitanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
