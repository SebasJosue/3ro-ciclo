import { Test, TestingModule } from '@nestjs/testing';
import { VideojuegoController } from './videojuego.controller';

describe('VideojuegoController', () => {
  let controller: VideojuegoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideojuegoController],
    }).compile();

    controller = module.get<VideojuegoController>(VideojuegoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
