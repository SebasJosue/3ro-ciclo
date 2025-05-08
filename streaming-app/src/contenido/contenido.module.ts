import { Module } from '@nestjs/common';
import { ContenidoService } from './contenido.service';
import { ContenidoController } from './contenido.controller';
import { PrismaModule } from '../prisma/prisma.module'; // ✅ importa el módulo

@Module({
  imports: [PrismaModule], // ✅ necesario para usar PrismaService
  controllers: [ContenidoController],
  providers: [ContenidoService],
})
export class ContenidoModule {}
