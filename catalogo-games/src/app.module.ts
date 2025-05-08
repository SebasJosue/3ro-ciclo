import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideojuegoModule } from './videojuego/videojuego.module';
import { ResenaModule } from './resena/resena.module';
import { DesarrolladorModule } from './desarrollador/desarrollador.module';
import { PrismaModule } from './prisma/prisma.module'; // Asegúrate de tener esto si hiciste el módulo Prisma

@Module({
  imports: [
    PrismaModule, // Importa tu módulo Prisma aquí
    VideojuegoModule,
    DesarrolladorModule,
    ResenaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
