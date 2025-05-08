import { Test, TestingModule } from '@nestjs/testing';
import { DictaService } from './dicta.service';

describe('DictaService', () => {
  let service: DictaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DictaService],
    }).compile();

    service = module.get<DictaService>(DictaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
