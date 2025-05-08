import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarreraModule } from './carrera/carrera.module';
import { MateriaModule } from './materia/materia.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { ProfesorModule } from './profesor/profesor.module';
import { InscripcionModule } from './inscripcion/inscripcion.module';
import { DictaModule } from './dicta/dicta.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CarreraModule, MateriaModule, EstudianteModule, ProfesorModule, InscripcionModule, DictaModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
