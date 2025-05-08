import { Module } from '@nestjs/common';
import { DesarrolladorService } from './desarrollador.service';
import { DesarrolladorController } from './desarrollador.controller';

@Module({
  providers: [DesarrolladorService],
  controllers: [DesarrolladorController]
})
export class DesarrolladorModule {}
