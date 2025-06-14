import { Test, TestingModule } from '@nestjs/testing';
import { ResenaController } from './resena.controller';

describe('ResenaController', () => {
  let controller: ResenaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResenaController],
    }).compile();

    controller = module.get<ResenaController>(ResenaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
