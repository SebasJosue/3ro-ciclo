import { Test, TestingModule } from '@nestjs/testing';
import { DictaController } from './dicta.controller';

describe('DictaController', () => {
  let controller: DictaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DictaController],
    }).compile();

    controller = module.get<DictaController>(DictaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
