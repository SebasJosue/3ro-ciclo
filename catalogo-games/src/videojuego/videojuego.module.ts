import { Module } from '@nestjs/common';
import { VideojuegoService } from './videojuego.service';
import { VideojuegoController } from './videojuego.controller';

@Module({
  providers: [VideojuegoService],
  controllers: [VideojuegoController]
})
export class VideojuegoModule {}
